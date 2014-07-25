var _ = require('underscore');
require('leaflet-active-area');

var map,
    organizationLayer,
    initialized = false,
    defaultCenter = [39.095963, -97.470703],
    defaultZoom = 5;

var organizationStyle = {
    fillColor: '#E3BE26',
    fillOpacity: 0.7,
    radius: 5,
    stroke: false
};

var organizationHoverStyle = {
    color: '#F1E7CD',
    fillColor: '#493F90',
    fillOpacity: 0.7,
    stroke: true,
    radius: 15
};

function createMap(id, center, zoom) {
    return L.map(id, {
        center: center || defaultCenter,
        maxZoom: 19,
        zoom: zoom || defaultZoom,
        zoomControl: false
    });
}

function addStreets(map) {
    return L.tileLayer(CONFIG.TILE_URL, {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        mapId: CONFIG.MAP_ID,
        maxZoom: 18
    }).addTo(map);
}

function addOrganizations(map, callback) {
    $.getJSON(CONFIG.API_BASE + '/organizations/geojson/', function (data) {
        var organizationLayer = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    map.fire('featureclick', feature);
                });
                layer.on('mouseover', function () {
                    layer.bindPopup(feature.properties.name, {
                        closeButton: false,
                        offset: [0, -1]              
                    }).openPopup();
                    layer.setStyle(organizationHoverStyle);
                });
                layer.on('mouseout', function () {
                    layer.closePopup();
                    layer.setStyle(organizationStyle);
                });
            },

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, organizationStyle);
            }
        })
        organizationLayer.addTo(map);
        if (callback !== undefined) {
            callback(organizationLayer);
        }
    });
}

function initializeMap(id, center, zoom) {
    map = createMap(id, center, zoom);
    map.setActiveArea('map-active-area');

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    addStreets(map);
    addOrganizations(map, function (layer) {
        organizationLayer = layer;
        organizationLayer.on('filterschange', function (filters) {
            var sectors = filters.sectors,
                types = filters.types;
                
            this.eachLayer(function (l) {
                var properties = l.feature.properties,
                    typesMatch = _.intersection(properties.types, types).length > 0,
                    sectorsMatch = _.intersection(properties.sectors, sectors).length > 0;
                if ((sectors.length === 0 && types.length === 0) ||
                    ((types.length === 0 || typesMatch) && 
                     (sectors.length === 0 || sectorsMatch))) {
                    map.addLayer(l);
                }
                else {
                    map.removeLayer(l);
                }
            });
        });
    });

    map.on('locationfound', function (e) {
        map.setView(e.latlng, 16);
    });

    initialized = true;
    return map;
}

module.exports = {
    init: initializeMap,
    createMap: createMap,
    addStreets: addStreets,
    addOrganizations: addOrganizations,
    isInitialized: function () { return initialized; },
    setView: function (center, zoom) {
        if (!map) return;
        map.setView(center, zoom);
    },
    updateFilters: function (filters) {
        organizationLayer.fire('filterschange', filters);
    }
};

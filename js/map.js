var _ = require('underscore');
require('leaflet-active-area');

var map,
    organizationLayer,
    organizationLayerListeners = [],
    selectedOrganization,
    initialized = false,
    defaultCenter = [39.095963, -97.470703],
    defaultZoom = 5,
    defaultRadius = 6;

var organizationStyle = {
    fillColor: '#E3BE26',
    fillOpacity: 0.7,
    radius: defaultRadius,
    stroke: false
};

var organizationHoverStyle = {
    color: '#F1E7CD',
    fillColor: '#493F90',
    fillOpacity: 0.5,
    opacity: 1,
    stroke: true,
    radius: 20
};

var organizationSelectStyle = organizationHoverStyle;

function createMap(id, center, zoom) {
    return L.map(id, {
        center: center || defaultCenter,
        maxZoom: 19,
        minZoom: 3,
        zoom: zoom || defaultZoom,
        zoomControl: false
    });
}

function addStreets(map) {
    if (CONFIG.MAP_TYPE === 'mapbox') {
        return L.mapbox.tileLayer(CONFIG.MAP_ID, {
            accessToken: CONFIG.MAP_ACCESS_TOKEN,
            attribution: '<a href="http://openstreetmap.org/copyright">Map data: © OpenStreetMap</a> | <a href="http://mapbox.com/map-feedback/" class="mapbox-improve-map">Improve this map</a>'
        }).addTo(map);
    }
    else {
        return L.tileLayer(CONFIG.TILE_URL, {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
            maxZoom: 18
        }).addTo(map);
    }
}

function getOrganizationStyle(map) {
    var zoom = map.getZoom(),
        radius = defaultRadius;
    if (zoom > 8) {
        radius = radius + 1 + Math.floor(zoom - 8 / 3);
    }
    return _.extend({}, organizationStyle, { radius: radius });
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
                    if (selectedOrganization && layer === selectedOrganization) return;
                    layer.setStyle(getOrganizationStyle(map));
                });
            },

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, getOrganizationStyle(map));
            }
        });
        organizationLayer.addTo(map);
        if (callback !== undefined) {
            callback(organizationLayer);
        }
        _.each(organizationLayerListeners, function (callback) {
            callback(organizationLayer);
        });
        organizationLayerListeners = [];
    });
}

function initializeMap(id, center, zoom, organizationsCallback) {
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

        if (organizationsCallback) {
            organizationsCallback();
        }
    });

    map.on('zoomend', function () {
        // Update all organization features' radii
        var style = getOrganizationStyle(map);
        organizationLayer.eachLayer(function (l) {
            // Except for selected org, if any?
            if (selectedOrganization && l === selectedOrganization) return;
            l.setStyle(style);
        });
    });

    map.on('locationfound', function (e) {
        if (e.bounds) {
            map.fitBounds(e.bounds);
        }
        else {
            map.setView(e.latlng, 16);
        }
    });

    initialized = true;
    return map;
}

function getOrganization(id) {
    var matchedLayer = null;
    organizationLayer.eachLayer(function (layer) {
        if (layer.feature.id === id) {
            matchedLayer = layer;
        }
    });
    return matchedLayer;
}

function deselectOrganization () {
    if (!selectedOrganization) return;
    selectedOrganization.setStyle(organizationStyle);
    selectedOrganization = null;
}

module.exports = {
    init: initializeMap,
    createMap: createMap,
    addStreets: addStreets,
    addOrganizations: addOrganizations,
    isInitialized: function () { return initialized; },

    addOrganizationLayerListener: function (callback) {
        organizationLayerListeners.push(callback);
    },

    deselectOrganization: deselectOrganization,

    selectOrganization: function (id) {
        if (!map || !organizationLayer) return;
        deselectOrganization();
        map.closePopup();
        var organization = getOrganization(parseInt(id));
        if (!organization) return;
        map.setView(organization.getLatLng(), 15);
        organization.setStyle(organizationSelectStyle);
        selectedOrganization = organization;
    },

    updateFilters: function (filters) {
        organizationLayer.fire('filterschange', filters);
    }
};

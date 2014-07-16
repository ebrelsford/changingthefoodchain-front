var _ = require('underscore');

var map,
    organizationLayer,
    initialized = false,
    defaultCenter = [39.095963, -97.470703],
    defaultZoom = 5;

function initializeMap(id, center, zoom) {
    map = L.map(id, {
        center: center || defaultCenter,
        maxZoom: 19,
        zoom: zoom || defaultZoom,
        zoomControl: false
    });
    var $map = $('#' + id);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    var streets = L.tileLayer(CONFIG.TILE_URL, {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        mapId: CONFIG.MAP_ID,
        maxZoom: 18
    }).addTo(map);

    $.getJSON(CONFIG.API_BASE + '/organizations/geojson/', function (data) {
        organizationLayer = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    map.fire('featureclick', feature);
                });
            }
        })
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
        organizationLayer.addTo(map);
    });

    map.on('locationfound', function (e) {
        map.setView(e.latlng, 16);
    });

    initialized = true;
    return map;
}

module.exports = {
    init: initializeMap,
    isInitialized: function () { return initialized; },
    updateFilters: function (filters) {
        organizationLayer.fire('filterschange', filters);
    }
};

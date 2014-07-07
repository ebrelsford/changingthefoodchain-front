var _ = require('underscore');

var map,
    organizationLayer,
    initialized = false;

function initializeMap(id) {
    map = L.map(id, {
        center: [39.095963, -97.470703],
        maxZoom: 19,
        zoom: 5,
        zoomControl: false
    });
    var $map = $('#' + id);

    L.control.zoom({ position: 'bottomright' }).addTo(map);

    var streets = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        mapId: 'fcwa.ii987b9p',
        maxZoom: 18
    }).addTo(map);

    $.getJSON(CONFIG.API_BASE + '/organizations/', function (data) {
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

var map,
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

    var streets = L.tileLayer('http://{s}.tiles.mapbox.com/v3/{mapId}/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
        mapId: 'fcwa.ii987b9p',
        maxZoom: 18
    }).addTo(map);

    var sql = 'SELECT * FROM food_worker_orgs';
    $.getJSON('http://fcwa.cartodb.com/api/v2/sql?format=GeoJSON&q=' + sql, function (data) {
        L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                layer.on('click', function () {
                    map.fire('featureclick', feature.properties);
                });
            }
        }).addTo(map);
    });

    map.on('locationfound', function (e) {
        map.setView(e.latlng, 16);
    });

    initialized = true;
    return map;
}

module.exports = {
    init: initializeMap,
    isInitialized: function () { return initialized; }
};

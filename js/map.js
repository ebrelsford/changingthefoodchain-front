var map;

var defaultCartoCSS = '#food_worker_orgs{ marker-fill: #0F0; }';

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

    cartodb.createLayer(map, {
        cartodb_logo: false,
        user_name: 'fcwa',
        type: 'cartodb',
        sublayers: [{
            cartocss: defaultCartoCSS,
            interactivity: 'address, city, name, organization_type, state, food_sector_s',
            sql: 'SELECT * FROM food_worker_orgs'
        }]
    })
    .addTo(map)
    .done(function (layer) {
        lotsLayer = layer.getSubLayer(0);
        lotsLayer.setInteraction(true);
        layer.on('featureClick', function (e, latlng, pos, data, sublayerIndex) {
            map.fire('featureclick', data);
        });

        layer.on('featureOver', function (e, latlng, pos, data) {
            // Update mouse cursor when over a feature
            $map.css('cursor', 'pointer');
            data.latlng = latlng;
            map.fire('featureover', data);
        });
        layer.on('featureOut', function (e, latlng, pos, data) {
            // Reset mouse cursor when no longer over a feature
            var grabStyle = 'cursor: grab; cursor: -moz-grab; cursor: -webkit-grab;';
            $map.attr('style',  grabStyle);
            map.fire('featureout', data);
        });

        map.addLayer(layer, false);
    });

    return map;
}

module.exports = {
    init: initializeMap
};

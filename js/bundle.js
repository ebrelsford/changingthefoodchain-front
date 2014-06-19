(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var map = require('./map');

$(document).ready(function () {
    map.init('map')
        .on('featureclick', function (data) {
            var template = JST['handlebars_templates/feature.hbs'],
                content = template(data),
                $target = $('#popup');
            $target.empty().html(content).show();
            $('#popup-close').click(function () {
                $('#popup').hide();
                return false;
            });
        });
});

},{"./map":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
var map = require('./map');
var qs = require('qs');

var s = window.location.search,
    center,
    zoom;

if (s && s.length > 0) {
    params = qs.parse(s.slice(1));
    if (params.center) {
        center = params.center.split(',');
        center[0] = parseFloat(center[0]);
        center[1] = parseFloat(center[1]);
    }
    if (params.zoom) {
        zoom = parseInt(params.zoom);
    }
}

map.init('map', center, zoom);

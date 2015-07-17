var _ = require('underscore');
var i18n = require('./i18n');
require('leaflet-active-area');

var map,
    organizationLayer,
    organizationLayerListeners = [],
    selectedOrganization,
    newsLayer,
    selectedNews,
    initialized = false,
    defaultCenter = [39.095963, -97.470703],
    defaultZoom = 5,
    defaultRadius = 5;

var markerStyle = {
    fillOpacity: 0.7,
    radius: defaultRadius,
    stroke: false
};

var markerHoverStyle = {
    fillOpacity: 0.5,
    opacity: 1,
    stroke: true,
    radius: 20
};

var organizationStyle = _.extend({}, markerStyle, { fillColor: '#E3BE26' });
var organizationHoverStyle = _.extend({}, markerHoverStyle, {
    color: '#F1E7CD',
    fillColor: '#493F90'
});
var organizationSelectStyle = organizationHoverStyle;

var newsStyle = _.extend({}, markerStyle, { fillColor: '#BC461B' });
var newsHoverStyle = _.extend({}, markerHoverStyle, {
    color: '#BC461B',
    fillColor: '#493F90'
});
var newsSelectStyle = newsStyle;

function getMarkerRadius(map) {
    var zoom = map.getZoom(),
        radius = defaultRadius;
    if (zoom > 8) {
        radius = radius + 1 + Math.floor(zoom - 8 / 3);
    }
    return radius;
}

function getOrganizationStyle(map) {
    return _.extend({}, organizationStyle, { radius: getMarkerRadius(map) });
}

function getNewsStyle(map) {
    return _.extend({}, newsStyle, { radius: getMarkerRadius(map) });
}

function createMap(id, center, zoom) {
    return L.map(id, {
        center: center || defaultCenter,
        maxBounds: [
            [0, -210],
            [74, 0]
        ],
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
                        offset: [0, -6]              
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
        organizationLayer.addTo(map).bringToBack();
        if (callback !== undefined) {
            callback(organizationLayer);
        }
        _.each(organizationLayerListeners, function (callback) {
            callback(organizationLayer);
        });
        organizationLayerListeners = [];
    });
}

function addNews(map, callback) {
    var params = {
        language: i18n.getLocale()
    };
    $.getJSON(CONFIG.API_BASE + '/entries/geojson/?' + $.param(params), function (data) {
        var newsLayer = L.geoJson(data, {
            onEachFeature: function (feature, layer) {
                feature.properties.type = 'news';
                layer.on('click', function () {
                    map.fire('featureclick', feature);
                });
                layer.on('mouseover', function () {
                    var popupOptions = {
                        closeButton: false,
                        offset: [0, -6]
                    };
                    if (feature.properties.cover) {
                        popupOptions.minWidth = 300;
                    }
                    var content = feature.properties.title + feature.properties.cover;
                    layer.bindPopup(content, popupOptions).openPopup();
                    layer.setStyle(newsHoverStyle);
                });
                layer.on('mouseout', function () {
                    layer.closePopup();
                    if (selectedNews && layer === selectedNews) return;
                    layer.setStyle(getNewsStyle(map));
                });
            },

            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, getNewsStyle(map));
            }
        });
        newsLayer.addTo(map).bringToFront();
        if (callback !== undefined) {
            callback(newsLayer);
        }
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
            var categories = filters.categories,
                categoriesPicked = categories && categories.length !== 0,
                sectors = filters.sectors,
                sectorsPicked = sectors && sectors.length !== 0,
                types = filters.types,
                typesPicked = types && types.length !== 0;

            // If news filters and no organization filters, hide the whole layer
            if (categoriesPicked && !(sectorsPicked || typesPicked)) {
                map.removeLayer(organizationLayer);
                return;
            }
            else {
                map.addLayer(organizationLayer);
            }

            this.eachLayer(function (l) {
                var properties = l.feature.properties,
                    typesMatch = _.intersection(properties.types, types).length > 0,
                    sectorsMatch = _.intersection(properties.sectors, sectors).length > 0;
                if (!(sectorsPicked || typesPicked) ||
                    ((!typesPicked || typesMatch) && 
                     (!sectorsPicked || sectorsMatch))) {
                    map.addLayer(l);
                    l.bringToBack();
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

    addNews(map, function (layer) {
        newsLayer = layer;
        newsLayer.on('filterschange', function (filters) {
            var categories = filters.categories,
                categoriesPicked = categories && categories.length !== 0,
                sectors = filters.sectors,
                sectorsPicked = sectors && sectors.length !== 0,
                types = filters.types,
                typesPicked = types && types.length !== 0;

            // If organization filters and no news filters, hide the whole layer
            if ((sectorsPicked || typesPicked) && !categoriesPicked) {
                map.removeLayer(newsLayer);
                return;
            }
            else {
                map.addLayer(newsLayer);
            }

            this.eachLayer(function (l) {
                var properties = l.feature.properties,
                    categoriesMatch = _.intersection(properties.categories, categories).length > 0;
                if (categoriesMatch || !categoriesPicked) {
                    map.addLayer(l);
                    l.bringToFront();
                }
                else {
                    map.removeLayer(l);
                }
            });
        });
    });

    map.on('zoomend', function () {
        // Update all organization features' radii
        var style = getOrganizationStyle(map);
        organizationLayer.eachLayer(function (l) {
            // Except for selected org, if any?
            if (selectedOrganization && l === selectedOrganization) return;
            l.setStyle(style);
        });

        style = getNewsStyle(map);
        newsLayer.eachLayer(function (l) {
            // Except for selected news entry, if any?
            if (selectedNews && l === selectedNews) return;
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

function getLayer(layer, id) {
    var matchedLayer = null;
    layer.eachLayer(function (l) {
        if (l.feature.id === id) {
            matchedLayer = l;
        }
    });
    return matchedLayer;
}

function getOrganization(id) {
    return getLayer(organizationLayer, id);
}

function getNewsEntry(id) {
    return getLayer(newsLayer, id);
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

    reset: function (map) {
        map.setView(defaultCenter, defaultZoom);
    },

    selectOrganization: function (id) {
        if (!map || !organizationLayer) return;
        deselectOrganization();
        map.closePopup();
        var organization = getOrganization(parseInt(id));
        if (!organization) return;
        map.setView(organization.getLatLng(), 11);
        organization.setStyle(organizationSelectStyle);
        selectedOrganization = organization;
    },

    updateFilters: function (filters) {
        if (newsLayer) {
            newsLayer.fire('filterschange', filters);
        }
        if (organizationLayer) {
            organizationLayer.fire('filterschange', filters);
        }
    },

    zoomToNewsEntry: function (id) {
        var newsPoint = getNewsEntry(parseInt(id));
        if (!newsPoint) return;
        map.setView(newsPoint.getLatLng(), 12);
    }
};

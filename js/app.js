var Ember = require('ember');
var geocode = require('./geocode').geocode;
var mapmodule = require('./map');
var i18n = require('./i18n');
var qs = require('qs');
var _ = require('underscore');
require('ember-i18n');
require('bootstrap_carousel');
require('bootstrap_modal');
require('bootstrap_tab');
require('../templates/templates');

var map;

function initializeMap() {
    if (mapmodule.isInitialized()) return;
    if ($('#map').length === 0) return;

    // Get initial map view from hash's search string
    var hash = window.location.hash,
        s,
        center,
        zoom;

    if (hash && hash.length > 0 && hash.indexOf('?') > 0) {
        s = hash.slice(hash.indexOf('?'));
    }
    if (s && s.length > 0) {
        var params = qs.parse(s.slice(1));
        if (params.lat && params.lng) {
            center = {
                lng: parseFloat(params.lng),
                lat: parseFloat(params.lat)
            };
        }
        if (params.z) {
            zoom = parseInt(params.z);
        }
    }

    map = mapmodule.init('map', center, zoom)
        .on('featureclick', function (feature) {
            var controller = App.__container__.lookup('controller:application');
            controller.transitionToRoute('organization', feature.id);
        })
        .on('moveend zoomend', function () {
            var controller = App.__container__.lookup('controller:application'),
                center = map.getCenter(),
                lat = Math.round(center.lat * 100) / 100.0,
                lng = Math.round(center.lng * 100) / 100.0,
                z = map.getZoom();
            controller.set('lat', lat);
            controller.set('lng', lng);
            controller.set('z', z);
        });
}

function makeFullHeight() {
    $('.full-height').each(function () {
        var parentHeight = $(this).parent().outerHeight(),
            offsetTop = $(this).offset().top,
            height = parentHeight - offsetTop;
        $(this).outerHeight(height);
    });
}

function makeFullWidth() {
    $('.full-width').each(function () {
        var parentWidth = $(this).parent().outerWidth(),
            offsetLeft = $(this).offset().left,
            width = parentWidth - offsetLeft;
        $(this).outerWidth(width);
    });
}

Ember.View.reopen({
    didInsertElement: function () {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.didRenderElement);
    },

    didRenderElement: function () {
        makeFullHeight();
        makeFullWidth();
        initializeMap();
    }
});

window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,

    ready: function () {
        // When the window is resized, fix heights of full-height elements
        $(window).resize(function () {
            Ember.run.debounce(this, makeFullHeight, 100);
            Ember.run.debounce(this, makeFullWidth, 100);
        });
    }
});
App.deferReadiness();

App.Router.map(function() {
    this.route('add-organization', { path: '/organizations/add' });
    this.route('list-organizations', { path: '/organizations' });
    this.resource('organization', {
        path: '/organizations/:organization_id'
    }, function () {
        this.route('add_media', { path: '/add-media' });
    });
    this.route('about');
    this.route('contact');
    this.route('news');
    this.route('share');
});

App.ApplicationRoute = Ember.Route.extend({
    actions: {
        openAddOrganization: function () {
            this.transitionTo('add-organization');
        },

        openOrganization: function (id) {
            this.transitionTo('organization', id);
        },

        openOrganizationList: function () {
            this.transitionTo('list-organizations');
        },

        openShare: function () {
            this.transitionTo('share');
        }
    }
});

App.ApplicationController = Ember.Controller.extend({
    organizationTypes: [
        {
            label: 'workers center'
        },
        {
            label: 'legal aid'
        },
        {
            label: 'union'
        },
        {
            label: 'advocacy group'
        }
    ],
    sectors: [
        {
            label: 'agriculture'
        },
        {
            label: 'food processing'
        },
        {
            label: 'food service'
        },
        {
            label: 'distribution'
        },
        {
            label: 'retail'
        }
    ],
    searchText: '',

    lat: null,
    lng: null,
    z: null,

    queryParams: ['lat', 'lng', 'z'],

    actions: {
        search: function () {
            geocode(this.searchText, map.getBounds(), null, function (result) {
                map.fire('locationfound', { latlng: result.latlng });
            });
        },

        filtersChanged: function () {
            var types = _.chain(this.get('organizationTypes'))
                .filter(function (type) { return type.isActive; })
                .map(function (type) { return type.label; })
                .value();

            var sectors = _.chain(this.get('sectors'))
                .filter(function (sector) { return sector.isActive; })
                .map(function (sector) { return sector.label; })
                .value();

            mapmodule.updateFilters({
                sectors: sectors,
                types: types
            });
        },

        setLocale: function (locale) {
            i18n.setLocale(locale);
        },
    }
});

App.OrganizationTypeView = Ember.CollectionView.extend({
    tagName: 'ul',
    classNames: ['filters-type-list'],
    itemViewClass: Ember.View.extend({
        classNames: ['filters-type-list-item'],
        classNameBindings: ['content.isActive:active'],
        click: function () {
            Ember.set(this.content, 'isActive', !Ember.get(this.content, 'isActive'));
            this.container.lookup('controller:application').send('filtersChanged');
        },
        templateName: 'organization-type-item'
    })
});

App.SectorView = Ember.CollectionView.extend({
    tagName: 'ul',
    classNames: ['filters-sector-list'],
    itemViewClass: Ember.View.extend({
        classNames: ['filters-sector-list-item'],
        classNameBindings: ['content.isActive:active'],
        click: function () {
            Ember.set(this.content, 'isActive', !Ember.get(this.content, 'isActive'));
            this.container.lookup('controller:application').send('filtersChanged');
        },
        templateName: 'sector-item'
    })
});

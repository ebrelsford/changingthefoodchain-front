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
require('typeahead');
require('ember-typeahead');

var map;

function initializeMap() {
    if (mapmodule.isInitialized()) return;
    if ($('#map').length === 0) return;
    var controller = App.__container__.lookup('controller:application');

    // Get initial map view from hash's search string
    var params = controller.getQueryParams(),
        center,
        zoom;

    if (params.lat && params.lng) {
        center = {
            lng: parseFloat(params.lng),
            lat: parseFloat(params.lat)
        };
    }
    if (params.z) {
        zoom = parseInt(params.z);
    }

    map = mapmodule.init('map', center, zoom, function () {
        controller.send('organizationsReady');
    })
        .on('featureclick', function (feature) {
            controller.transitionToRoute('organization', feature.id);
        })
        .on('moveend zoomend', function () {
            var center = map.getCenter(),
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

Ember.Controller.reopen({
    getQueryParams: function () {
        var hash = window.location.hash;
        if (!(hash && hash.length > 0 && hash.indexOf('?') > 0)) {
            return {};
        }
        hash = hash.slice(hash.indexOf('?') + 1);
        if (!(hash && hash.length > 0)) {
            return {};
        }
        return qs.parse(hash);
    }
});

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

Ember.Route.reopen({
    makePageTitle: function (title) {
        var applicationTitle = Ember.I18n.t('application.title');
        if (title) {
            return title + ' | ' + applicationTitle;
        }
        if (this.title) {
            return this.title() + ' | ' + applicationTitle;
        }
        return applicationTitle;
    },

    deactivate: function () {
        this.controllerFor('application').set('previousTitle', document.title);
        this.controllerFor('application').set('previousUrl', window.location.href);
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

        // When a modal is shown, make it vertically centered
        function centerModal() {
            var $dialog = $(this).find('.modal-dialog'),
                offset = ($('body').height() - $dialog.height()) / 2;
            $dialog.css("margin-top", offset);
        }
        $('body').on('shown.bs.modal', centerModal);
        $(window).on("resize", function () {
            $('.modal:visible').each(centerModal);
        });
    }
});
App.deferReadiness();

App.Router.map(function() {
    this.resource('organizations', { path: '/organizations' }, function () {
        this.route('add', { path: 'add' });
        this.route('list', { path: 'all' });
        this.resource('organization', { path: ':organization_id' }, function () {
            this.route('add_media', { path: 'add-media' });
        });
    });

    this.route('about');
    this.route('help-industry-types', { path: '/help/industry-types' });
    this.route('help-organization-types', { path: '/help/organization-types' });
    this.route('contact');
    this.route('news');
    this.resource('news-entry', { path: '/news/:entry_id' });
    this.route('share');
});

App.ApplicationRoute = Ember.Route.extend({
    actions: {
        didTransition: function () {
            this.send('setPageTitle');
        },

        setPageTitle: function () {
            document.title = this.makePageTitle();
        },

        openOrganization: function (id) {
            this.transitionTo('organization', id);
        },

        openShare: function () {
            this.transitionTo('share');
        }
    }
});

App.ApplicationController = Ember.Controller.extend({
    // Organizations for autocomplete
    organizations: $.getJSON(CONFIG.API_BASE + '/organizations/names/').then(function (data) {
        return _.map(data, function (element) {
            return Ember.ObjectController.create(element);
        });
    }),
    searchText: null,
    searchError: false,
    selectedOrganization: null,
    previousTitle: null,
    previousUrl: null,

    selectedSectors: [],
    selectedTypes: [],

    languages: [
        { label: 'Eng', code: 'en' },
        { label: 'Esp', code: 'es' }
    ],

    lat: null,
    lng: null,
    z: null,

    init: function () {
        this._super();
        var selectedLanguage = i18n.getLocale(),
            l = _.find(this.get('languages'), function (language) {
                return language.code === selectedLanguage; 
            });
        l.active = true;
        this.propertyDidChange('languages');

        var params = this.getQueryParams();
        if (params.selectedSectors) {
            this.set('selectedSectors', JSON.parse(params.selectedSectors));
        }
        if (params.selectedTypes) {
            this.set('selectedTypes', JSON.parse(params.selectedTypes));
        }

        var controller = this;
        this.store.findAll('sector')
            .then(function (sectors) {
                controller.set('sectors', sectors);
            });

        this.store.findAll('type')
            .then(function (types) {
                controller.set('types', types);
            });
    },

    setSelectedSectors: function () {
        // Once sectors are set, update with selectedSectors from queryParams
        var selectedSectors = this.get('selectedSectors');
        _.each(this.get('sectors.content'), function (type) {
            if (_.contains(selectedSectors, type.get('name'))) {
                type.set('isActive', true);
            }
        });
    }.observes('sectors'),

    setSelectedTypes: function () {
        // Once types are set, update with selectedTypes from queryParams
        var selectedTypes = this.get('selectedTypes');
        _.each(this.get('types.content'), function (type) {
            if (_.contains(selectedTypes, type.get('name'))) {
                type.set('isActive', true);
            }
        });
    }.observes('types'),

    organizationSelected: function () {
        this.send('openOrganization', this.get('selectedOrganization').get('id'));
    }.observes('selectedOrganization'),

    queryParams: ['lat', 'lng', 'z', 'selectedSectors', 'selectedTypes'],

    findActive: function (checkedModels) {
        return _.chain(checkedModels)
            .filter(function (model) { return model.get('isActive'); })
            .map(function (model) { return model.get('name'); })
            .value();
    },

    clearSearchError: function () {
        this.set('searchError', false);
    }.observes('searchText'),

    actions: {
        reset: function () {
            mapmodule.reset(map);
            this.send('clearFilters');
            this.transitionTo('index');
        },

        search: function () {
            var route = this;
            this.set('searchError', false);
            geocode(route.get('searchText'), map.getBounds(), null, function (result) {
                if (result) {
                    map.fire('locationfound', {
                        bounds: result.bounds,
                        latlng: result.latlng 
                    });
                }
                else {
                    route.set('searchError', true);
                }
            });
        },

        clearFilters: function () {
            var sectors = this.get('sectors.content'),
                types = this.get('types.content');
            _.each(sectors, function (sector) {
                sector.set('isActive', false);
            });
            _.each(types, function (type) {
                type.set('isActive', false);
            });
            this.send('filtersChanged');
        },

        organizationsReady: function () {
            // Once organizations layer is ready, update filters
            mapmodule.updateFilters({
                sectors: this.get('selectedSectors'),
                types: this.get('selectedTypes')
            });
        },

        filtersChanged: function () {
            this.set('selectedSectors', this.findActive(this.get('sectors.content')));
            this.set('selectedTypes', this.findActive(this.get('types.content')));
            mapmodule.updateFilters({
                sectors: this.get('selectedSectors'),
                types: this.get('selectedTypes')
            });
        },

        setLocale: function (locale) {
            i18n.setLocale(locale);
        }
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

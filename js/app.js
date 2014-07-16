var Ember = require('ember');
var geocode = require('./geocode').geocode;
var mapmodule = require('./map');
var i18n = require('./i18n');
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
    map = mapmodule.init('map')
        .on('featureclick', function (feature) {
            var controller = App.__container__.lookup('controller:application');
            controller.transitionToRoute('organization', feature.id);
        });
}

Ember.View.reopen({
    didInsertElement : function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.didRenderElement);
    },
    didRenderElement : function() {
        initializeMap();
    }
});

window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
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
    this.route('share');
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

        openOrganization: function (id) {
            this.transitionToRoute('organization', id);
        },

        openAddOrganization: function () {
            this.transitionToRoute('add-organization');
        },

        openOrganizationList: function () {
            this.transitionToRoute('list-organizations');
        },

        openShare: function () {
            this.transitionToRoute('share');
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

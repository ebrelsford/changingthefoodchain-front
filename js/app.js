var Ember = require('ember');
var geocode = require('./geocode').geocode;
var mapmodule = require('./map');
var i18n = require('./i18n');
require('ember-i18n');
require('../templates/templates');

var map;

function initializeMap() {
    if (mapmodule.isInitialized()) return;
    if ($('#map').length === 0) return;
    map = mapmodule.init('map')
        .on('featureclick', function (data) {
            var indexController = App.__container__.lookup('controller:index');
            indexController.transitionToRoute('organization', data.cartodb_id);
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

module.exports = {
    init: function () {
        var application = Ember.Application.create({
            LOG_TRANSITIONS: true,
            LOG_TRANSITIONS_INTERNAL: true
        });
        application.deferReadiness();

        application.Router.reopen({
            //location: 'history'
        });

        application.Router.map(function() {
            this.resource('organization', {
                path: '/organization/:organization_id'
            });
            this.route('about');
            this.route('contact');
        });

        application.PageRoute = Ember.Route.extend({
            renderTemplate: function () {
                this.render('page', { outlet: 'page' });
            },

            deactivate: function () {
                $('#page').hide();
            }
        });

        application.PageView = Ember.View.extend({
            didRenderElement: function () {
                this._super();
                $('#page').show()
                    .find('.close').click(function () {
                        // TODO likely not the most elegant way to do this, but
                        // works for now
                        var indexController = App.__container__.lookup('controller:index');
                        indexController.transitionToRoute('index');
                    });
            }
        });

        application.AboutRoute = application.PageRoute.extend({
            model: function () {
                return $.get('pages/about.html');
            }
        });

        application.ApplicationController = Ember.Controller.extend({
            searchText: '',

            actions: {
                search: function () {
                    geocode(this.searchText, map.getBounds(), null, function (result) {
                        map.fire('locationfound', { latlng: result.latlng });
                    });
                },

                setLocale: function (locale) {
                    i18n.setLocale(locale);
                },

                openOrganization: function (id) {
                    this.transitionToRoute('organization', id);
                }
            }
        });

        application.OrganizationView = Ember.View.extend({
            didRenderElement : function() {
                this._super();
                $('#popup').show()
                    .find('.close').click(function () {
                        // TODO See above
                        var indexController = App.__container__.lookup('controller:index');
                        indexController.transitionToRoute('index');
                    });
            }
        });

        application.OrganizationRoute = Ember.Route.extend({
            model: function (params) {
                var sql = 'SELECT * FROM food_worker_orgs WHERE cartodb_id = ' + params.organization_id;
                return $.getJSON('http://fcwa.cartodb.com/api/v2/sql?q=' + sql)
                    .then(function (data) {
                        return data.rows[0];  
                    });
            },

            deactivate: function () {
                $('#popup').hide();
            },

            renderTemplate: function () {
                this.render('organization', { outlet: 'popup' });
            }

        });

        return application;
    }
};

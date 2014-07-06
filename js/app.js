var Ember = require('ember');
var DS = require('ember-data');
require('ember-data-django');
var geocode = require('./geocode').geocode;
var mapmodule = require('./map');
var i18n = require('./i18n');
require('ember-i18n');
require('bootstrap_tab');
require('bootstrap_modal');
require('../templates/templates');

var map;

function initializeMap() {
    if (mapmodule.isInitialized()) return;
    if ($('#map').length === 0) return;
    map = mapmodule.init('map')
        .on('featureclick', function (feature) {
            var indexController = App.__container__.lookup('controller:index');
            indexController.transitionToRoute('organization', feature.id);
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
            }, function () {
                this.route('add_media', { path: '/add-media' });
            });
            this.route('about');
            this.route('contact');
        });

        application.Store = DS.Store.extend({
            adapter: DS.DjangoRESTAdapter.extend({
                host: CONFIG.API_BASE
            })
        });

        // TODO hasMany for content
        application.Organization = DS.Model.extend({
            address: DS.attr(),
            city: DS.attr(),
            country: DS.attr(),
            name: DS.attr('string'),
            postal_code: DS.attr('string'),
            state_province: DS.attr('string')
        });

        application.PageRoute = Ember.Route.extend({
            actions: {
                close: function () {
                    this.transitionTo('index');
                }
            },

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
                $('#page').show();
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
                $('#popup').show();
            }
        });

        application.OrganizationRoute = Ember.Route.extend({
            actions: {
                close: function () {
                    this.transitionTo('index');
                }
            },

            model: function (params) {
                return this.store.find('organization', params.organization_id);
            },

            deactivate: function () {
                $('#popup').hide();
            },

            renderTemplate: function () {
                this.render('organization', { outlet: 'popup' });
            }

        });

        application.OrganizationAddMediaRoute = Ember.Route.extend({
            actions: {
                close: function () {
                    this.controller.onExit();
                    this.disconnectOutlet('modal');
                    history.back();
                }
            },

            model: function () {
                return this.modelFor('organization');
            },

            renderTemplate: function () {
                this.render({
                    into: 'application',
                    outlet: 'modal'
                })
            },

            setupController: function (controller, model) {
                controller.set('model', model);
            },

            templateName: 'organization/add_media.hbs'
        });

        application.OrganizationAddMediaController = Ember.Controller.extend({
            error: false,
            success: false,
            tab: 'video',
            videoUrl: '',

            onExit: function () {
                this.set('success', false);
                this.set('error', false);
                this.set('videoUrl', '');
            },

            onError: function () {
                this.set('error', true);
                this.set('success', false);
            },

            onSuccess: function () {
                this.set('success', true);
                this.set('error', false);
                this.set('videoUrl', '');
            },

            submitPhoto: function () {
                var data = new FormData();
                data.append('organization', this.get('model').id);
                data.append('photo', $(':file[name=photo]')[0].files[0]);

                $.ajax({
                    context: this,
                    data: data,
                    type: 'POST',
                    url: CONFIG.API_BASE + 'content/photos/',
                    cache: false,
                    contentType: false,
                    processData: false
                })
                    .done(this.onSuccess)
                    .fail(this.onError);
            },

            submitVideo: function () {
                var params = {
                    organization: this.get('model').id,
                    url: this.videoUrl
                };
                $.ajax({
                    context: this,
                    data: params,
                    type: 'POST',
                    url: CONFIG.API_BASE + 'content/videos/'
                })
                    .done(this.onSuccess)
                    .fail(this.onError);
            },

            actions: {
                changeTab: function (tab) {
                    $(this).tab('show');
                    this.set('tab', tab);
                },

                submit: function () {
                    if (this.tab === 'photo') {
                        this.submitPhoto();
                    }
                    else if (this.tab === 'video') {
                        this.submitVideo();
                    }
                    return false;
                }
            }
        });

        application.OrganizationAddMediaView = Ember.View.extend({
            didRenderElement : function() {
                this._super();
                $('#addOrganizationMediaModal').modal();
            }
        });

        return application;
    }
};

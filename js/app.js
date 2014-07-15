var Ember = require('ember');
var DS = require('ember-data');
require('ember-data-django');
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

module.exports = {
    init: function () {
        var application = Ember.Application.create({
            LOG_TRANSITIONS: true,
            LOG_TRANSITIONS_INTERNAL: true
        });
        application.deferReadiness();

        application.Router.map(function() {
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

        application.ApplicationAdapter = DS.DjangoRESTAdapter.extend({
            host: CONFIG.API_BASE
        })

        application.Organization = DS.Model.extend({
            address_line1: DS.attr(),
            city: DS.attr(),
            country: DS.attr(),
            name: DS.attr('string'),
            postal_code: DS.attr('string'),
            state_province: DS.attr('string'),
            photos: DS.hasMany('photo'),
            sectors: DS.hasMany('sector'),
            types: DS.hasMany('type')
        });

        application.Sector = DS.Model.extend({
            name: DS.attr('string')
        });

        application.Type = DS.Model.extend({
            name: DS.attr('string')
        });

        application.Photo = DS.Model.extend({
            fullUrl: function () {
                return CONFIG.API_BASE + this.get('url');
            }.property('url'),

            photo: DS.attr(),
            organization: DS.belongsTo('organization'),
            url: DS.attr()
        });

        application.ListOrganizationsRoute = Ember.Route.extend({
            actions: {
                close: function () {
                    this.transitionTo('index');
                }
            },

            model: function () {
                return $.getJSON(CONFIG.API_BASE + '/organizations/');
            },

            renderTemplate: function () {
                this.render('list-organizations', { outlet: 'page' });
            },

            deactivate: function () {
                $('#page').hide();
            }
        });

        application.ListOrganizationsController = Ember.Controller.extend({
            actions: {
                openOrganization: function (id) {
                    this.transitionToRoute('organization', id);
                }
            }
        });

        application.ListOrganizationsView = Ember.View.extend({
            didRenderElement: function () {
                this._super();
                $('#page').show();
            }
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
                return $.get(CONFIG.API_BASE + '/pages/about/');
            }
        });

        application.ContactRoute = application.PageRoute.extend({
            model: function () {
                return $.get(CONFIG.API_BASE + '/pages/contact/');
            }
        });

        application.ApplicationController = Ember.Controller.extend({
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

        application.AddOrganizationController = Ember.Controller.extend({
            potentialSectors: ['agriculture', 'service'],
            potentialTypes: ['advocacy', 'union', 'workers center'],

            address: '',
            address2: '',
            city: '',
            name: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
            sectors: [],
            types: [],
            centroid: null,

            geocodedAddress: '',
            geocodedCity: '',
            geocodedState: '',
            geocodedZip: '',

            fullAddress: function () {
                return [
                    this.get('address'),
                    this.get('city'),
                    this.get('state'),
                    this.get('zip')
                ].join(', ');
            }.property('address', 'city', 'state', 'zip'),

            typeCheckbox: Ember.Checkbox.extend({
                change: function () {
                    var types = this.get('controller').types;
                    if (this.checked) {
                        types.push(this.name);
                    }
                    else {
                        types.removeObject(this.name);
                    }
                }
            }),

            sectorCheckbox: Ember.Checkbox.extend({
                change: function () {
                    var sectors = this.get('controller').sectors;
                    if (this.checked) {
                        sectors.push(this.name);
                    }
                    else {
                        sectors.removeObject(this.name);
                    }
                }
            }),

            actions: {
                updateCentroid: function () {
                    geocode(this.get('fullAddress'), null, null, function (result) {
                        if (result) {
                            var controller = App.__container__.lookup('controller:add-organization');
                            controller.set('centroid', result.latlng);
                            controller.set('geocodedAddress', result.address);
                            controller.set('geocodedCity', result.city);
                            controller.set('geocodedState', result.state);
                            controller.set('geocodedZip', result.zip);
                            controller.send('updateMap');
                        }
                    });
                },

                updateMap: function () {
                    this.get('map').fire('locationfound', {
                        latlng: this.get('centroid')
                    });
                }
            }
        });

        application.AddOrganizationRoute = Ember.Route.extend({
            clearValidation: function () {
                this.controller.set('centroidError', false);
                this.controller.set('error', false);
                this.controller.set('nameError', false);
                this.controller.set('sectorsError', false);
                this.controller.set('typesError', false);
            },

            clearForm: function () {
                this.controller.set('name', null);
                this.controller.set('address_line1', null);
                this.controller.set('address_line2', null);
                this.controller.set('city', null);
                this.controller.set('state_province', null);
                this.controller.set('postal_code', null);
                this.controller.set('email', null);
                this.controller.set('phone', null);
                this.controller.set('centroid', null);
            },

            validate: function () {
                this.clearValidation();
                if (!this.controller.get('name')) {
                    this.controller.set('nameError', true);
                    return false;
                }
                if (!this.controller.get('centroid')) {
                    this.controller.set('centroidError', true);
                    return false;
                }
                if (this.controller.get('types').length === 0) {
                    this.controller.set('typesError', true);
                    return false;
                }
                if (this.controller.get('sectors').length === 0) {
                    this.controller.set('sectorsError', true);
                    return false;
                }
                return true;
            },

            actions: {
                close: function () {
                    this.disconnectOutlet('modal');
                    history.back();
                },

                submit: function () {
                    if (!this.validate()) return;

                    var controller = this.controller,
                        centroid = controller.get('centroid'),
                        data = new FormData();

                    data.append('name', controller.get('name'));
                    data.append('address_line1', controller.get('address'));
                    data.append('address_line2', controller.get('address2'));
                    data.append('city', controller.get('city'));
                    data.append('state_province', controller.get('state'));
                    data.append('postal_code', controller.get('zip'));
                    data.append('email', controller.get('email'));
                    data.append('phone', controller.get('phone'));
                    data.append('centroid', 'SRID=4326;POINT(' + centroid[1] + ' ' + centroid[0] + ')');

                    $.each(controller.get('sectors'), function (i, sector) {
                        if (sector) {
                            data.append('sectors', sector);
                        }
                    });
                    $.each(controller.get('types'), function (i, type) {
                        if (type) {
                            data.append('types', type);
                        }
                    });

                    controller.set('submitting', true);
                    $.ajax({
                        context: this,
                        type: 'POST',
                        url: CONFIG.API_BASE + '/organizations/',
                        data: data,
                        cache: false,
                        contentType: false,
                        processData: false
                    })
                        .done(function () {
                            this.controller.set('success', true);
                            this.clearForm();
                        })
                        .fail(function () {
                            this.controller.set('error', true);
                        })
                        .always(function () {
                            this.controller.set('submitting', false);
                        });;
                }
            },

            renderTemplate: function () {
                this.render({
                    into: 'application',
                    outlet: 'modal'
                })
            }
        });

        application.AddOrganizationView = Ember.View.extend({
            didRenderElement : function() {
                this._super();
                $('#addOrganizationModal').modal()
                    .on('hide.bs.modal', function () {
                        App.__container__.lookup('route:add-organization').send('close');
                    });

                var marker = null;
                var addOrganizationMap = L.map('add-organization-map', {
                    center: [39.095963, -97.470703],
                    maxZoom: 19,
                    zoom: 3,
                    zoomControl: false
                })

                addOrganizationMap.on('locationfound', function (e) {
                    if (marker) {
                        addOrganizationMap.removeLayer(marker);
                    }
                    marker = L.marker(e.latlng).addTo(addOrganizationMap);
                    addOrganizationMap.setView(e.latlng, 16);
                });

                var streets = L.tileLayer(CONFIG.TILE_URL, {
                    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
                    mapId: CONFIG.MAP_ID,
                    maxZoom: 18
                }).addTo(addOrganizationMap);

                this.controller.set('map', addOrganizationMap);
            },

            templateName: 'organization/add'
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
            }
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
                    url: CONFIG.API_BASE + '/content/photos/',
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
                    url: CONFIG.API_BASE + '/content/videos/'
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
                $('#addOrganizationMediaModal').modal()
                    .on('hide.bs.modal', function () {
                        App.__container__.lookup('route:organization.add_media').send('close');
                    });
            }
        });

        application.ShareController = Ember.Controller.extend({
            embedCode: '<iframe src=""></iframe>',
            embedSizeSelect: 'small',
            embedSizes: ['small', 'large'],
            shareUrl: ''
        });

        application.ShareRoute = Ember.Route.extend({
            actions: {
                close: function () {
                    this.disconnectOutlet('modal');
                    history.back();
                }
            },

            getShareUrl: function () {
                return window.location.protocol + '//' + window.location.host;
            },

            renderTemplate: function () {
                this.render({
                    into: 'application',
                    outlet: 'modal'
                })
            },

            setupController: function (controller, model) {
                controller.set('model', model);
                controller.set('shareUrl', this.getShareUrl());
            }
        });

        application.ShareView = Ember.View.extend({
            didRenderElement : function() {
                this._super();
                $('#shareModal').modal()
                    .on('hide.bs.modal', function () {
                        App.__container__.lookup('route:share').send('close');
                    });
            }
        });

        application.OrganizationTypeView = Ember.CollectionView.extend({
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

        application.SectorView = Ember.CollectionView.extend({
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

        //
        // CarouselView: Based on http://jsfiddle.net/marciojunior/U6V2x/
        //
        application.CarouselView = Ember.View.extend({    
            templateName: 'carousel',
            classNames: ['carousel', 'slide'],

            init: function() { 
                this._super.apply(this, arguments);
                // Disable the data api from boostrap
                $(document).off('.data-api');      

                // At least one item must have the active class, so we set the 
                // first here, and the class will be added by class binding
                var obj = this.get('content.firstObject');
                Ember.set(obj, 'isActive', true);
            },

            previousSlide: function() {
                this.$().carousel('prev');
            },

            nextSlide: function() {
                this.$().carousel('next');
            },

            didInsertElement: function() {
                this.$().carousel();
            },

            indicatorsView: Ember.CollectionView.extend({
                tagName: 'ol',
                classNames: ['carousel-indicators'],        
                contentBinding: 'parentView.content',
                itemViewClass: Ember.View.extend({
                    click: function() {
                        var $elem = this.get("parentView.parentView").$();
                        $elem.carousel(this.get("contentIndex"));
                    },
                    template: '',
                    classNameBindings: ['content.isActive:active']            
                })
            }),

            itemsView: Ember.CollectionView.extend({        
                classNames: ['carousel-inner'],
                contentBinding: 'parentView.content',
                itemViewClass: Ember.View.extend({
                    classNames: ['item'],
                    classNameBindings: ['content.isActive:active'],
                    templateName: 'carousel-item'
                })
            })
        });

        return application;
    }
};

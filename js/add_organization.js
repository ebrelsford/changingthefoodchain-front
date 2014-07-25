var Ember = require('ember');
var geocode = require('./geocode').geocode;


App.AddOrganizationController = Ember.Controller.extend({
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

App.AddOrganizationRoute = Ember.Route.extend({
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
                });
        }
    },

    renderTemplate: function () {
        this.render({
            into: 'application',
            outlet: 'modal'
        });
    }
});

App.AddOrganizationView = Ember.View.extend({
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
        });

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

var Ember = require('ember');
var Spinner = require('spinjs');
var map = require('./map');
var _ = require('underscore');


App.OrganizationsView = Ember.View.extend({
    didInsertElement: function () {
        this._super();
        $('body').addClass('organization-view');
        $('#popup').show();
    },

    willDestroyElement: function () {
        this._super();
        $('body').removeClass('organization-view');
    }
});

App.OrganizationsRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
            map.deselectOrganization();
        }
    },

    deactivate: function () {
        $('#popup').hide();
    }
});

App.OrganizationsErrorRoute = App.OrganizationsRoute.extend({});
App.OrganizationsErrorView = App.OrganizationsView.extend({});

App.OrganizationsLoadingRoute = App.OrganizationsRoute.extend({});
App.OrganizationsLoadingView = App.OrganizationsView.extend({
    didInsertElement: function () {
        this._super();
        var spinner = new Spinner({
            lines: 13,
            length: 20,
            width: 5,
            radius: 25,
            corners: 1,
            trail: 60,
            top: '50%',
            left: '50%'
        }).spin($('.loading-indicator')[0]);
    }
});

App.OrganizationView = App.OrganizationsView.extend({
    didRenderElement : function() {
        this._super();

        // Make full height on screen bigger than md
        if (Modernizr.mq('(min-width: 1200px)')) {
            $('.organization-details').outerHeight($('#popup').height());
        }
        else {
            $('.organization-details').css('height', '');
        }

        // If this is the first view we're seeing, the model will have changed
        // before the map is ready to zoom, so add a listener
        (function (controller) {
            map.addOrganizationLayerListener(function () {
                controller.send('selectOrganization');
            });
        })(this.controller);

        // If we're moving to the view from another where the map is ready
        // select here
        this.controller.send('selectOrganization');
    }
});

App.OrganizationController = Ember.Controller.extend({
    actions: {
        selectOrganization: function () {
            map.selectOrganization(this.model.get('id'));
        }
    },

    init: function () {
        this._super();

        var controller = this;
        this.store.findAll('sector')
            .then(function (sectors) {
                controller.set('sectors', sectors.map(function (item) {
                    // Create a non-persisted clone of the item
                    var newItem =  _.extend({}, item);
                    _.each(item.get('data'), function (value, key) {
                        newItem.set(key, value);
                    });
                    newItem.set('isActive', false);
                    return newItem;
                }));
            });

        this.store.findAll('type')
            .then(function (types) {
                controller.set('types', types.map(function (item) {
                    // Create a non-persisted clone of the item
                    var newItem =  _.extend({}, item);
                    _.each(item.get('data'), function (value, key) {
                        newItem.set(key, value);
                    });
                    newItem.set('isActive', false);
                    return newItem;
                }));
            });
    },

    updateCenter: function () {
        this.send('selectOrganization');
    }.observes('model'),

    updateSelectedSectors: function () {
        // Update isActive for sectors active on this organization
        var selectedSectors = _.map(this.get('model').get('sectors').content, function (type) {
            return type.get('name');
        });
        _.each(this.get('sectors'), function (type) {
            type.set('isActive', _.contains(selectedSectors, type.get('name')));
        });
    }.observes('model', 'sectors'),

    updateSelectedTypes: function () {
        // Update isActive for types active on this organization
        var selectedTypes = _.map(this.get('model').get('types').content, function (type) {
            return type.get('name');
        });
        _.each(this.get('types'), function (type) {
            type.set('isActive', _.contains(selectedTypes, type.get('name')));
        });
    }.observes('model', 'types')
});

App.OrganizationRoute = App.OrganizationsRoute.extend({
    actions: {
        setPageTitle: function () {
            document.title = this.makePageTitle(this.controllerFor('organization').get('model').get('name'));
        }
    },

    model: function (params) {
        return this.store.find('organization', params.organization_id);
    }
});

App.OrganizationIndexController = Ember.Controller.extend({
    needs: ['organization']
});

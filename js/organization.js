var Ember = require('ember');
var Spinner = require('spinjs');
var map = require('./map');


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

        var popupHeight = $('#popup').height(),
            headerHeight = $('.organization-header').height();
        $('.organization-details').outerHeight(popupHeight - headerHeight);

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

    updateCenter: function () {
        this.send('selectOrganization');
    }.observes('model')
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

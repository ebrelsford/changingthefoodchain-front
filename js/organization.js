var Ember = require('ember');
var map = require('./map');


App.OrganizationView = Ember.View.extend({
    didInsertElement: function () {
        this._super();
        $('body').addClass('organization-view');
    },

    didRenderElement : function() {
        this._super();
        $('#popup').show();

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
    },

    willDestroyElement: function () {
        this._super();
        $('body').removeClass('organization-view');
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

App.OrganizationRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
            map.deselectOrganization();
        },

        setPageTitle: function () {
            document.title = this.makePageTitle(this.controllerFor('organization').get('model').get('name'));
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

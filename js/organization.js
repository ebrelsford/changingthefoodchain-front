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

        // The first time the view is rendered, the model will have changed
        // before the map was ready to zoom, so do it now
        this.controller.send('centerOnOrganization');
    },

    willDestroyElement: function () {
        this._super();
        $('body').removeClass('organization-view');
    }
});

App.OrganizationController = Ember.Controller.extend({
    actions: {
        centerOnOrganization: function () {
            var coordinates = this.model.get('centroid.coordinates');
            map.setView([coordinates[1], coordinates[0]], 15);
        }
    },

    updateCenter: function () {
        this.send('centerOnOrganization');
    }.observes('model')
});

App.OrganizationRoute = Ember.Route.extend({
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

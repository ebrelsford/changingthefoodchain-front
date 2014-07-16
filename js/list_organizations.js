var Ember = require('ember');


App.ListOrganizationsRoute = Ember.Route.extend({
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

App.ListOrganizationsController = Ember.Controller.extend({
    actions: {
        openOrganization: function (id) {
            this.transitionToRoute('organization', id);
        }
    }
});

App.ListOrganizationsView = Ember.View.extend({
    didRenderElement: function () {
        this._super();
        $('#page').show();
    }
});

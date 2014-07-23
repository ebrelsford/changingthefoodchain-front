var Ember = require('ember');


App.OrganizationView = Ember.View.extend({
    didRenderElement : function() {
        this._super();
        $('#popup').show();

        var popupHeight = $('#popup').height(),
            headerHeight = $('.organization-header').height();
        $('.organization-details').outerHeight(popupHeight - headerHeight);
    }
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

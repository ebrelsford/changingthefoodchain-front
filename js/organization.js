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
    },

    willDestroyElement: function () {
        this._super();
        $('body').removeClass('organization-view');
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

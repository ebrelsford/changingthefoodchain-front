App.HelpOrganizationTypesRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
        }
    },

    renderTemplate: function () {
        this.render('help-organization-types', { outlet: 'help' });
    }
});

App.HelpOrganizationTypesView = Ember.View.extend({
    didRenderElement: function () {
        $('#help').show();
        this._super();
        $('body').addClass('help-organization-types-view');
    },

    willDestroyElement: function () {
        this._super();
        $('#help').hide();
        $('body').removeClass('help-organization-types-view');
    }
});

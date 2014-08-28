App.HelpRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
        }
    }
});

App.HelpView = Ember.View.extend({
    didRenderElement: function () {
        $('#help').show();
        this._super();
        $('body').addClass('help-view');
    },

    willDestroyElement: function () {
        this._super();
        $('#help').hide();
        $('body').removeClass('help-view');
    }
});


App.HelpOrganizationTypesRoute = App.HelpRoute.extend({
    renderTemplate: function () {
        this.render('help-organization-types', { outlet: 'help' });
    }
});

App.HelpOrganizationTypesView = App.HelpView.extend({});


App.HelpIndustryTypesRoute = App.HelpRoute.extend({
    renderTemplate: function () {
        this.render('help-industry-types', { outlet: 'help' });
    }
});

App.HelpIndustryTypesView = App.HelpView.extend({});

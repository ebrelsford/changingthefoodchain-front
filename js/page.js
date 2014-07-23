App.PageRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
        }
    },

    renderTemplate: function () {
        this.render('page', { outlet: 'page' });
    },

    deactivate: function () {
        $('#page').hide();
    }
});

App.PageView = Ember.View.extend({
    didRenderElement: function () {
        $('#page').show();
        this._super();
    }
});

App.AboutRoute = App.PageRoute.extend({
    model: function () {
        return $.get(CONFIG.API_BASE + '/pages/about/');
    }
});

App.ContactRoute = App.PageRoute.extend({
    model: function () {
        return $.get(CONFIG.API_BASE + '/pages/contact/');
    }
});

App.PageRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
        }
    },

    renderTemplate: function () {
        this.render('page', { outlet: 'page' });
    }
});

App.PageView = Ember.View.extend({
    didInsertElement: function () {
        this._super();
        $('body').addClass('page-view');
    },

    didRenderElement: function () {
        $('#page').show();
        this._super();
    },

    willDestroyElement: function () {
        $('#page').hide();
        this._super();
        $('body').removeClass('page-view');
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

App.NewsRoute = App.PageRoute.extend({
    model: function () {
        return $.get(CONFIG.API_BASE + '/pages/news/');
    }
});

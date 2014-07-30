var i18n = require('./i18n');


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
        var url = CONFIG.API_BASE + '/pages/about/';
        if (i18n.getLocale() !== CONFIG.DEFAULT_LOCALE) {
            url += i18n.getLocale() + '/';
        }
        return $.get(url);
    }
});

App.ContactRoute = App.PageRoute.extend({
    model: function () {
        var url = CONFIG.API_BASE + '/pages/about/';
        if (i18n.getLocale() !== CONFIG.DEFAULT_LOCALE) {
            url += i18n.getLocale() + '/';
        }
        return $.get(url);
    }
});

App.NewsRoute = App.PageRoute.extend({
    model: function () {
        return $.get(CONFIG.API_BASE + '/pages/news/');
    }
});

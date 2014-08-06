var i18n = require('./i18n');
var _s = require('underscore.string');


App.PageRouteMixin = Ember.Mixin.create({
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
        console.log('PageView#didRenderElement');
        this.$('h2').attr('id', function () {
            return _s.slugify($(this).text());
        });
    },

    willDestroyElement: function () {
        $('#page').hide();
        this._super();
        $('body').removeClass('page-view');
    }
});

App.SectionsRouteMixin = Ember.Mixin.create({
    afterModel: function (content) {
        (function (controller) {
            var sections = [];
            $(content).find('h2').each(function () {
                var name = $(this).text();
                sections.push({
                    id: _s.slugify(name),
                    name: name
                });
            });
            controller.set('sections', sections);
        })(this.controllerFor('about'));
    },

    actions: {
        scrollToSection: function (sectionId) {
            $('#page').animate({
                scrollTop: $('#' + sectionId).position().top + 50
            }, 500);
        }
    }
});

App.AboutController = Ember.Controller.extend({});

App.AboutRoute = Ember.Route.extend(App.PageRouteMixin, App.SectionsRouteMixin, {
    model: function () {
        var url = CONFIG.API_BASE + '/pages/about/';
        if (i18n.getLocale() !== CONFIG.DEFAULT_LOCALE) {
            url += i18n.getLocale() + '/';
        }
        return $.get(url);
    },

    viewName: 'about'
});

App.ContactRoute = Ember.Route.extend(App.PageRouteMixin, {
    model: function () {
        var url = CONFIG.API_BASE + '/pages/about/';
        if (i18n.getLocale() !== CONFIG.DEFAULT_LOCALE) {
            url += i18n.getLocale() + '/';
        }
        return $.get(url);
    }
});

App.NewsRoute = Ember.Route.extend(App.PageRouteMixin, {
    model: function () {
        return $.get(CONFIG.API_BASE + '/pages/news/');
    }
});

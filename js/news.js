var _ = require('underscore');
require('./pagemixins');


App.NewsController = Ember.ArrayController.extend({
    isLoading: false,
    page: null,
    nextPage: 1,

    init: function () {
        this._super();
        this.send('loadNextPage');
        this.loadCategories();
    },

    refresh: function () {
        this.clear();
        this.setProperties({
            page: null,
            nextPage: 1
        });
        this.send('loadNextPage');
    },

    loadCategories: function () {
        var params = { language: CONFIG.language },
            controller = this;
        controller.set('category', null);
        controller.store.find('category', params).then(function (data) {
            controller.set('categories', data.content);
        });
    },

    actions: {
        loadNextPage: function () {
            var controller = this,
                nextPage = controller.get('nextPage'),
                params = {
                    language: CONFIG.language,
                    page: nextPage 
                },
                category = controller.get('category'),
                featured = controller.get('featured');
            if (controller.get('isLoading') || !nextPage) return;
            controller.set('isLoading', true);

            if (category) {
                params.category = category;
            }
            if (featured) {
                params.featured = true;
            }

            (function () {
                controller.store.find('entry', params).then(function (data) {
                    controller.addObjects(data.content);  
                    var meta = data.store.metadataFor('entry');
                    controller.setProperties({
                        isLoading: false,
                        page: meta.current_page,
                        nextPage: meta.next_page
                    });
                });
            })();
        },

        openEntry: function (id) {
            this.transitionToRoute('news-entry', id);
        },

        clear: function () {
            var categories = this.get('categories');
            _.each(categories, function (category) {
                category.set('isActive', false);
            });
            this.set('category', null);
            this.set('featured', null);
            this.refresh();
        },

        pickFeatured: function () {
            var categories = this.get('categories');
            _.each(categories, function (category) {
                category.set('isActive', false);
            });
            this.set('category', null);
            this.set('featured', true);
            this.refresh();
        },

        pickCategory: function (id) {
            var categories = this.get('categories');
            _.each(categories, function (category) {
                category.set('isActive', category.get('id') === id);
            });
            this.set('category', id);
            this.set('featured', false);
            this.refresh();
        }
    }
});

App.NewsCategoryView = Ember.CollectionView.extend({
    tagName: 'ul',
    classNames: ['news-category-list'],
    itemViewClass: Ember.View.extend({
        classNames: ['news-category-list-item'],
        classNameBindings: ['content.isActive:active'],
        click: function () {
            var id = Ember.get(this.content, 'id');
            this.container.lookup('controller:news').send('pickCategory', id);
        },
        templateName: 'news-category-item'
    })
});

App.NewsRoute = Ember.Route.extend(App.PageRouteMixin, {
    templateName: 'news'
});

App.NewsView = Ember.View.extend(App.PageViewMixin, {
    willDestroyElement: function () {
        this._super();
        this.controller.set('category', null);
    }
});


App.NewsEntryController = Ember.Controller.extend({
    needs: ['news']
});

App.NewsEntryRoute = Ember.Route.extend(App.PageRouteMixin, {
    model: function (params) {
        return this.store.find('entry', params.entry_id);
    },

    templateName: 'news-entry'
});

App.NewsEntryView = Ember.View.extend(App.PageViewMixin, {});

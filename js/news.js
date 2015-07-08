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

    findActive: function (checkedModels) {
        return _.chain(checkedModels)
            .filter(function (model) { return model.get('isActive'); })
            .map(function (model) { return model.get('id'); })
            .value();
    },

    actions: {
        loadNextPage: function () {
            var controller = this,
                nextPage = controller.get('nextPage'),
                params = {
                    language: CONFIG.DEFAULT_LOCALE,
                    page: nextPage 
                },
                category = controller.get('category'),
                selectedCategories = controller.get('selectedCategories');
            if (controller.get('isLoading') || !nextPage) return;
            controller.set('isLoading', true);

            if (selectedCategories) {
                params.category = selectedCategories.join(',');
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
            this.refresh();
        },

        filtersChanged: function () {
            this.set('selectedCategories', this.findActive(this.get('categories')));
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
            Ember.set(this.content, 'isActive', !Ember.get(this.content, 'isActive'));
            this.container.lookup('controller:application').send('newsFiltersChanged');
            this.container.lookup('controller:news').send('filtersChanged');
        },
        templateName: 'news-category-item'
    })
});

App.NewsRoute = Ember.Route.extend(App.PageRouteMixin, {
    templateName: 'news'
});

App.NewsView = Ember.View.extend(App.PageViewMixin, App.PaginatedViewMixin, {
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

App.NewsEntryView = Ember.View.extend(App.PageViewMixin, {
    didRenderElement: function () {
        this._super();
        $('#page').scrollTop(0);
    }
});

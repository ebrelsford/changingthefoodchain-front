var Ember = require('ember');
require('ember-list-view');
require('./pagemixins');


App.ListOrganizationsRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
        },

        setPageTitle: function () {
            document.title = this.makePageTitle(Ember.I18n.t('list_organizations.title'));
        }
    },

    renderTemplate: function () {
        this.render('list-organizations', { outlet: 'page' });
    },

    deactivate: function () {
        $('#page').hide();
    }
});

App.ListOrganizationsController = Ember.ArrayController.extend({
    isLoading: false,
    page: null,
    nextPage: 1,
    height: 400,
    sortBy: {},

    needs: ['application'],

    sortByName: function () {
        return this.get('sortBy').key === 'name';
    }.property('sortBy'),

    sortByCity: function () {
        return this.get('sortBy').key === 'city';
    }.property('sortBy'),

    sortByState: function () {
        return this.get('sortBy').key === 'state_province';
    }.property('sortBy'),

    sortByTypes: function () {
        return this.get('sortBy').key === 'types';
    }.property('sortBy'),

    sortBySectors: function () {
        return this.get('sortBy').key === 'sectors';
    }.property('sortBy'),

    sortAscending: function () {
        return this.get('sortBy').dir === 'asc';
    }.property('sortBy'),

    filtersChanged: function () {
        Ember.run.debounce(this, this.refresh, 100);
    }.observes('controllers.application.selectedSectors', 'controllers.application.selectedTypes'),

    refresh: function () {
        this.clear();
        this.setProperties({
            page: null,
            nextPage: 1
        });
        this.send('loadNextPage');
    },

    actions: {
        sortBy: function (key) {
            var sortBy = this.get('sortBy'),
                dir = 'asc';
            if (sortBy.key === key && sortBy.dir === 'asc') {
                dir = 'desc';
            }
            this.set('sortBy', {
                key: key,
                dir: dir
            });
            this.refresh();
        },

        openOrganization: function (id) {
            this.transitionToRoute('organization', id);
        },

        loadNextPage: function () {
            var controller = this,
                applicationController = this.get('controllers.application'),
                sectors = applicationController.get('selectedSectors'),
                types = applicationController.get('selectedTypes'),
                sortBy = controller.get('sortBy'),
                nextPage = controller.get('nextPage'),
                params = { page: nextPage };
            if (controller.get('isLoading') || !nextPage) return;
            controller.set('isLoading', true);

            // Update parameters with filters
            if (sectors && sectors.length > 0) {
                params.sectors = sectors.join(',');
            }
            if (types && types.length > 0) {
                params.types = types.join(',');
            }

            // Update parameters with sorting
            if (sortBy && sortBy.key) {
                params.sortby = sortBy.key;
                // Add direction if descending
                if (sortBy.dir === 'desc') {
                    params.sortby = '-' + params.sortby;
                }
            }

            (function () {
                controller.store.find('organization', params).then(function (data) {
                    controller.addObjects(data.content);  
                    var meta = data.store.metadataFor('organization');
                    controller.setProperties({
                        isLoading: false,
                        page: meta.current_page,
                        nextPage: meta.next_page
                    });
                });
            })();
        }
    },

    listView: Ember.ListView.extend({
        didInsertElement: function () {
            this._super();
            // Add didRenderElement since this view comes from outside of
            // the application
            Ember.run.scheduleOnce('afterRender', this, this.didRenderElement);
        },

        didRenderElement: function () {
            this._super();
            this.set('height', this.calculateHeight());
        },

        height: function () {
            return $(document).height();
        }.property(),

        calculateHeight: function () {
            var pageHeight = $('#page').height(),
                buttonHeight = $('.organizations-list-add-organization').outerHeight(),
                headerHeight = $('.organizations-list-headers').outerHeight();
            return pageHeight - buttonHeight - headerHeight;
        },

        rowHeight: 25
    }),

    init: function () {
        this._super();
        this.send('loadNextPage');
    }
});

App.ListOrganizationsView = Ember.View.extend(App.PaginatedViewMixin, {
    paginatedScrollSelector: '.ember-list-view',

    didInsertElement: function () {
        this._super();
        $('body').addClass('list-organizations-view');
    },

    willDestroyElement: function () {
        this._super();
        $('body').removeClass('list-organizations-view');
    },

    didRenderElement: function () {
        this._super();
        $('#page').show();
    }
});

var Ember = require('ember');
require('ember-list-view');


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

    needs: ['application'],

    actions: {
        openOrganization: function (id) {
            this.transitionToRoute('organization', id);
        },

        loadNextPage: function () {
            var controller = this,
                applicationController = this.get('controllers.application'),
                sectors = applicationController.get('selectedSectors'),
                types = applicationController.get('selectedTypes'),
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

App.ListOrganizationsView = Ember.View.extend({
    didInsertElement: function () {
        this._super();
        $('.ember-list-view').bind('scroll', { view: this }, this.handleScroll);
        $('body').addClass('list-organizations-view');
    },

    willDestroyElement: function () {
        this._super();
        $('.ember-list-view').unbind('scroll', this.handleScroll);
        $('body').removeClass('list-organizations-view');
    },

    didRenderElement: function () {
        this._super();
        $('#page').show();
    },

    handleScroll: function (event) {
        var context = {
            controller: event.data.view.controller,
            element: this,
            view: event.data.view
        };
        Ember.run.debounce(context, event.data.view.watchScroll, 150);
    },

    watchScroll: function () {
        var element = this.element,
            $element = $(element),
            height = $element.outerHeight(),
            scrollBottom = element.scrollHeight - element.scrollTop - height;
        if (scrollBottom < height) {
            this.controller.send('loadNextPage');
        }
    }

});

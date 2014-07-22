var Ember = require('ember');
require('ember-list-view');


App.ListOrganizationsRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.transitionTo('index');
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

    actions: {
        openOrganization: function (id) {
            this.transitionToRoute('organization', id);
        },

        loadNextPage: function () {
            var controller = this,
                nextPage = controller.get('nextPage');
            if (controller.get('isLoading') || !nextPage) return;
            controller.set('isLoading', true);
            (function () {
                var params = { page: nextPage };
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

    init: function () {
        this._super();
        this.send('loadNextPage');
    }
});

App.ListOrganizationsView = Ember.View.extend({
    didInsertElement: function () {
        this._super();
        $('.ember-list-view').bind('scroll', { view: this }, this.handleScroll);
    },

    willRemoveElement: function () {
        this._super();
        $('.ember-list-view').unbind('scroll', this.handleScroll);
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

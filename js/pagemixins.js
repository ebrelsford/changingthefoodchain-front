App.PageRouteMixin = Ember.Mixin.create({
    actions: {
        close: function () {
            this.transitionTo('index');
        }
    },

    renderTemplate: function () {
        this.render(this.templateName, { outlet: 'page' });
    },

    templateName: 'page'
});

App.PageViewMixin = Ember.Mixin.create({
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

App.PaginatedViewMixin = Ember.Mixin.create({
    paginatedScrollSelector: '#page',

    didInsertElement: function () {
        this._super();
        $(this.paginatedScrollSelector).bind('scroll', { view: this }, this.handleScroll);
    },

    willDestroyElement: function () {
        this._super();
        $(this.paginatedScrollSelector).unbind('scroll', this.handleScroll);
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

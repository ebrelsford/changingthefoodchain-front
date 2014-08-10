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

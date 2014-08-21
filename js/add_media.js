var Ember = require('ember');
var _ = require('underscore');


App.OrganizationAddMediaRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.controller.onExit();
            this.disconnectOutlet('modal');
            history.back();
        }
    },

    model: function () {
        return this.modelFor('organization');
    },

    renderTemplate: function () {
        this.render('organization.index');
        this.render({
            into: 'application',
            outlet: 'modal'
        });
    },

    setupController: function (controller, model) {
        controller.set('model', model);
    }
});

App.OrganizationAddMediaController = Ember.Controller.extend({
    error: false,
    success: false,
    tabs: [
        { 
            isActive: true,
            name: 'Video',
            tabId: '#video',
            tabView: Ember.View.extend({
                templateName: 'organization/add_media_video'
            })
        },
        {
            name: 'Photo',
            tabId: '#photo',
            tabView: Ember.View.extend({
                templateName: 'organization/add_media_photo'
            })
        }
    ],
    videoUrl: null,

    onExit: function () {
        this.set('success', false);
        this.set('error', false);
        this.set('videoUrl', '');
    },

    onError: function () {
        this.set('error', true);
        this.set('success', false);
    },

    onSuccess: function () {
        this.set('success', true);
        this.set('error', false);
        this.set('videoUrl', '');
    },

    submitPhoto: function () {
        var data = new FormData();
        data.append('organization', this.get('model').id);
        data.append('photo', $(':file[name=photo]')[0].files[0]);

        $.ajax({
            context: this,
            data: data,
            type: 'POST',
            url: CONFIG.API_BASE + '/content/photos/',
            cache: false,
            contentType: false,
            processData: false
        })
            .done(this.onSuccess)
            .fail(this.onError);
    },

    submitVideo: function () {
        var params = {
            organization: this.get('model').id,
            url: this.videoUrl
        };
        $.ajax({
            context: this,
            data: params,
            type: 'POST',
            url: CONFIG.API_BASE + '/content/videos/'
        })
            .done(this.onSuccess)
            .fail(this.onError);
    },

    actions: {
        submit: function () {
            if (_.findWhere(this.tabs, { name: 'Photo' }).isActive) {
                this.submitPhoto();
            }
            else if (_.findWhere(this.tabs, { name: 'Video' }).isActive) {
                this.submitVideo();
            }
            return false;
        }
    }
});

App.OrganizationAddMediaView = Ember.View.extend({
    didRenderElement : function() {
        this._super();
        $('#addOrganizationMediaModal').modal()
            .on('hide.bs.modal', function () {
                App.__container__.lookup('route:organization.add_media').send('close');
            });
    },

    tabButtonsView: Ember.CollectionView.extend({
        classNames: ['nav', 'nav-tabs'],
        contentBinding: 'parentView.content',
        tagName: 'ul',
        itemViewClass: Ember.View.extend({
            classNameBindings: ['content.isActive:active'],
            click: function () {
                // Track state
                _.each(this._parentView.content, function (tab) {
                    tab.isActive = false;
                });
                this.content.isActive = true;

                // Re-render everything
                this._parentView._parentView.forEachChildView(function (v) {
                    v.rerender();
                });
                return false;
            },
            templateName: 'organization/add_media_tab_button'
        })
    }),

    tabContentView: Ember.View.extend({
        classNames: ['tab-content'],
        contentBinding: 'parentView.content',
        templateName: 'organization/add_media_tab_content'
    })
});

var Ember = require('ember');


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
        this.render({
            into: 'application',
            outlet: 'modal'
        })
    },

    setupController: function (controller, model) {
        controller.set('model', model);
    }
});

App.OrganizationAddMediaController = Ember.Controller.extend({
    error: false,
    success: false,
    tab: 'video',
    videoUrl: '',

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
        changeTab: function (tab) {
            $(this).tab('show');
            this.set('tab', tab);
        },

        submit: function () {
            if (this.tab === 'photo') {
                this.submitPhoto();
            }
            else if (this.tab === 'video') {
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
    }
});

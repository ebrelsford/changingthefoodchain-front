var Ember = require('ember');
var _ = require('underscore');


App.ContactController = Ember.Controller.extend({
    email: null,
    subject: null,
    text: null,

    emailError: false,
    error: false,
    textError: false,

    success: false
});

App.ContactRoute = Ember.Route.extend({
    clearValidation: function () {
        var errorProperties = ['emailError', 'textError', 'error'];
        _.each(errorProperties, function (errorProperty) {
            this.set(errorProperty, false);
        }, this.controller);
    },

    clearForm: function () {
        var properties = ['email', 'subject', 'text'],
            propertyChanges = {};

        _.each(properties, function (property) {
            propertyChanges[property] = null;
        });

        // Set all properties at the same time
        this.controller.setProperties(propertyChanges);
    },

    validate: function () {
        this.clearValidation();
        if (!this.controller.get('email')) {
            this.controller.set('emailError', true);
            return false;
        }
        if (!this.controller.get('text')) {
            this.controller.set('textError', true);
            return false;
        }
        return true;
    },

    actions: {
        close: function () {
            this.disconnectOutlet('page');
            history.back();
        },

        submit: function () {
            if (!this.validate()) {
                $('#page').scrollTop(0);
                return;
            }

            var controller = this.controller,
                fields = controller.getProperties(['email', 'subject', 'text']),
                data = new FormData();

            _.each(fields, function (value, name) {
                // Avoid adding null / empty values
                if (value !== null && value !== '') {
                    data.append(name, value);
                }
            });

            controller.set('submitting', true);
            $.ajax({
                context: this,
                type: 'POST',
                url: CONFIG.API_BASE + '/contact/',
                data: data,
                cache: false,
                contentType: false,
                processData: false
            })
                .done(function () {
                    this.controller.set('success', true);
                    this.clearForm();
                })
                .fail(function () {
                    this.controller.set('error', true);
                })
                .always(function () {
                    this.controller.set('submitting', false);
                    $('#page').scrollTop(0);
                });
        }
    },

    renderTemplate: function () {
        this.render({
            into: 'application',
            outlet: 'page'
        });
    }
});

App.ContactView = Ember.View.extend({
    didInsertElement: function () {
        this._super();
        $('body').addClass('contact-view');
    },

    willDestroyElement: function () {
        this._super();
        $('body').removeClass('contact-view');
        $('#page').hide();
    },

    didRenderElement: function() {
        this._super();

        $('#popup').hide();
        $('#page').show();
    }
});

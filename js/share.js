var Ember = require('ember');
var map = require('./map');


App.ShareController = Ember.Controller.extend({
    previousTitle: Ember.computed.alias('controllers.application.previousTitle'),
    previousUrl: Ember.computed.alias('controllers.application.previousUrl'),

    facebookUrl: function () {
        return 'http://www.facebook.com/sharer/sharer.php?' + $.param({
            u: this.get('previousUrl')
        });
    }.property('previousUrl'),

    twitterUrl: function () {
        return 'http://twitter.com/intent/tweet?' + $.param({
            related: 'foodchainworker,jubileefilms',
            text: this.get('previousTitle'),
            url: this.get('previousUrl')
        });
    }.property('previousUrl'),

    needs: ['application']
});

App.ShareRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.disconnectOutlet('modal');
            history.back();
        },

        setPageTitle: function () {
            document.title = this.makePageTitle(Ember.I18n.t('share.title'));
        }
    },

    renderTemplate: function () {
        this.render({
            into: 'application',
            outlet: 'modal'
        });
    }
});

App.BadgeController = Ember.Controller.extend({
    code: function () {
        var url = window.location.protocol + '//' + window.location.host,
            src = url + '/img/badge.png';
        return '<a href="' + url + '"><img style="height: auto; max-width: 300px;" src="' + src + '" /></a>';
    }
});

App.BadgeView = Ember.View.extend({
    controller: App.BadgeController.create(),
    templateName: 'badge'
});

App.EmbedController = Ember.Controller.extend({
    center: [39.09, -97.47],
    zoom: 3,
    code: function () {
        var size = this.get('size'),
            prefix = window.location.protocol + '//' + window.location.host,
            src = prefix + '/embed.html?' + $.param({
                center: this.get('center').join(','),
                size: this.get('size'),
                zoom: this.get('zoom')
            }),
            width = 'width="' + this.get('dimensions')[size][0] + '" ',
            height = 'height="' + this.get('dimensions')[size][1] + '" ',
            style = 'style="border: 0;" ';
        return '<iframe ' + style + width + height + 'src="' + src + '"></iframe>';
    }.property('center', 'size', 'zoom'),
    size: 'small',
    sizes: ['small', 'large'],
    dimensions: {
        small: [300, 200], 
        large: [600, 400]
    }
});

App.EmbedView = Ember.View.extend({
    controller: App.EmbedController.create(),

    didRenderElement: function () {
        var embedMap = map.createMap('embed-map', this.controller.get('center'),
                                     this.controller.get('zoom'));
        map.addStreets(embedMap);
        map.addOrganizations(embedMap);

        embedMap.on('moveend zoomend', function () {
            var center = embedMap.getCenter();
            this.controller.set('center', [center.lat, center.lng]);
            this.controller.set('zoom', embedMap.getZoom());
        }, this);

        $('#embed-tab').on('shown.bs.tab', null, { map: embedMap }, function (event) {
            event.data.map.invalidateSize(false);
        });
    },

    templateName: 'embed'
});

App.ShareView = Ember.View.extend({
    didRenderElement: function() {
        this._super();
        (function (view) {
            $('#shareModal').modal()
                .on('hide.bs.modal', function () {
                    try {
                        view.controller.send('close');
                    }
                    catch (e) {}
                });
        })(this);
    },

    willDestroyElement: function () {
        if ($('#shareModal').is(':visible')) {
            $('#shareModal').modal('hide');
        }
        this._super();
    },

    badgeView: App.BadgeView,
    embedView: App.EmbedView
});

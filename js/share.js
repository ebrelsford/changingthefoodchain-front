var Ember = require('ember');


App.ShareController = Ember.Controller.extend({
    shareUrl: ''
});

App.ShareRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.disconnectOutlet('modal');
            history.back();
        }
    },

    getShareUrl: function () {
        return window.location.protocol + '//' + window.location.host;
    },

    renderTemplate: function () {
        this.render({
            into: 'application',
            outlet: 'modal'
        })
    },

    setupController: function (controller, model) {
        controller.set('model', model);
        controller.set('shareUrl', this.getShareUrl());
    }
});

App.EmbedController = Ember.Controller.extend({
    center: [39.095963, -97.470703],
    zoom: 3,
    code: function () {
        var prefix = window.location.protocol + '://' + window.location.host,
            src = prefix + '/embed.html?' + $.param({
                center: this.get('center').join(','),
                size: this.get('size'),
                zoom: this.get('zoom')
            });
        return '<iframe src="' + src + '"></iframe>';
    }.property('center', 'size', 'zoom'),
    size: 'small',
    sizes: ['small', 'large']
});

App.EmbedView = Ember.View.extend({
    controller: App.EmbedController.create(),

    didRenderElement: function () {
        var embedMap = L.map('embed-map', {
            center: this.controller.get('center'),
            maxZoom: 19,
            zoom: this.controller.get('zoom'),
            zoomControl: false
        });

        embedMap.on('moveend zoomend', function () {
            var center = embedMap.getCenter();
            this.controller.set('center', [center.lat, center.lng]);
            this.controller.set('zoom', embedMap.getZoom());
        }, this);

        var streets = L.tileLayer(CONFIG.TILE_URL, {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',
            mapId: CONFIG.MAP_ID,
            maxZoom: 18
        }).addTo(embedMap);
    },

    templateName: 'embed'
});

App.ShareView = Ember.View.extend({
    didRenderElement: function() {
        this._super();
        $('#shareModal').modal()
            .on('hide.bs.modal', function () {
                App.__container__.lookup('route:share').send('close');
            });
    },

    embedView: App.EmbedView.create()
});

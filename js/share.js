var Ember = require('ember');
var map = require('./map');


App.ShareController = Ember.Controller.extend({
    shareUrl: function () {
        return window.location.protocol + '//' + window.location.host + '/#/' +
            window.location.hash.slice(window.location.hash.indexOf('?'));
    }.property()
});

App.ShareRoute = Ember.Route.extend({
    actions: {
        close: function () {
            this.disconnectOutlet('modal');
            history.back();
        }
    },

    renderTemplate: function () {
        this.render({
            into: 'application',
            outlet: 'modal'
        })
    }
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
        small: [200, 300], 
        large: [400, 600]
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
        $('#shareModal').modal()
            .on('hide.bs.modal', function () {
                App.__container__.lookup('route:share').send('close');
            });
    },

    embedView: App.EmbedView.create()
});

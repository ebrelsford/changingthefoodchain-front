var Ember = require('ember');
var map = require('./map');
require('../templates/templates');

function initializeMap() {
    if (map.isInitialized()) return;
    if ($('#map').length === 0) return;
    map.init('map')
        .on('featureclick', function (data) {
            var indexController = App.__container__.lookup('controller:index');
            indexController.transitionToRoute('organization', data.cartodb_id);
        });
}

Ember.View.reopen({
    didInsertElement : function() {
        this._super();
        Ember.run.scheduleOnce('afterRender', this, this.didRenderElement);
    },
    didRenderElement : function() {
        initializeMap();
    }
});

module.exports = {
    init: function (application) {
        application.Router.reopen({
            //location: 'history'
        });

        application.Router.map(function() {
            this.resource('organization', {
                path: '/organization/:organization_id'
            });
        });

        application.IndexController = Ember.Controller.extend({
            actions: {
                openOrganization: function (id) {
                    this.transitionToRoute('organization', id);
                }
            }
        });

        application.IndexRoute = Ember.Route.extend({
            activate: function () {
                initializeMap();
            }
        });

        application.OrganizationRoute = Ember.Route.extend({
            model: function (params) {
                var sql = 'SELECT * FROM food_worker_orgs WHERE cartodb_id = ' + params.organization_id;
                return $.getJSON('http://fcwa.cartodb.com/api/v2/sql?q=' + sql)
                    .then(function (data) {
                        return data.rows[0];  
                    });
            },

            activate: function () {
                initializeMap();
                $('#popup').show();
            },

            deactivate: function () {
                $('#popup').hide();
            },

            renderTemplate: function () {
                this.render('organization', { outlet: 'popup' });
            }

        });
    }
};

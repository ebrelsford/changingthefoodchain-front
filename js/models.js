var DS = require('ember-data');
require('ember-data-django');


App.ApplicationAdapter = DS.DjangoRESTAdapter.extend({
    host: CONFIG.API_BASE
})

App.Organization = DS.Model.extend({
    address_line1: DS.attr(),
    city: DS.attr(),
    country: DS.attr(),
    name: DS.attr('string'),
    postal_code: DS.attr('string'),
    state_province: DS.attr('string'),
    photos: DS.hasMany('photo'),
    sectors: DS.hasMany('sector'),
    types: DS.hasMany('type')
});

App.Sector = DS.Model.extend({
    name: DS.attr('string')
});

App.Type = DS.Model.extend({
    name: DS.attr('string')
});

App.Photo = DS.Model.extend({
    fullUrl: function () {
        return CONFIG.API_BASE + this.get('url');
    }.property('url'),

    photo: DS.attr(),
    organization: DS.belongsTo('organization'),
    url: DS.attr()
});

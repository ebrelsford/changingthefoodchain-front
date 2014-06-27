var Ember = require('ember');
var router = require('./router');

window.App = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true
});
router.init(App);

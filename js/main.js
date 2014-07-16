window.App = require('./app').init();
require('./carousel');
require('./share');

require('./i18n').init().then(function () {
    window.App.advanceReadiness();
});

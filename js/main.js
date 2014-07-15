window.App = require('./app').init();
require('./share');

require('./i18n').init().then(function () {
    window.App.advanceReadiness();
});

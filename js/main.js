window.App = require('./app').init();
require('./i18n').init().then(function () {
    window.App.advanceReadiness();
});

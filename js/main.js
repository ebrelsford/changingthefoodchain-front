window.App = require('./app').init();
require('./add_organization');
require('./carousel');
require('./models');
require('./page');
require('./share');

require('./i18n').init().then(function () {
    window.App.advanceReadiness();
});

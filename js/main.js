require('./app');
require('./add_media');
require('./add_organization');
require('./carousel');
require('./help');
require('./list_organizations');
require('./models');
require('./news');
require('./organization');
require('./page');
require('./share');

require('./i18n').init().then(function () {
    window.App.advanceReadiness();
});

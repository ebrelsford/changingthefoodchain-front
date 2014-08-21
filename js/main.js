require('./app');
require('./add_media');
require('./carousel');
require('./help');
require('./models');
require('./news');
require('./organization');
require('./organizations_add');
require('./organizations_list');
require('./page');
require('./share');

require('./i18n').init().then(function () {
    window.App.advanceReadiness();
});

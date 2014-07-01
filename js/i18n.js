var qs = require('qs');

var DEFAULT_LOCALE = 'en';

function getLocale() {
    var search = window.location.search;
    if (search.length > 0) {
        var params = qs.parse(search.slice(1));
        if (params && params.language) {
            return params.language;
        }
    }
    return DEFAULT_LOCALE;
}

module.exports = {
    getLocale: getLocale,
    init: function () {
        return $.getScript('translations/' + getLocale() + '.js');
    },
    setLocale: function (locale) {
        window.location.search = qs.stringify({ language: locale });
    }
};

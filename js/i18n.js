var qs = require('qs');


function getHashPath() {
    return window.location.hash.split('?')[0];
}

function parseHashQueryParams() {
    return qs.parse(window.location.hash.split('?')[1]);
}

function getLocale() {
    try {
        // Parse lang query param from hash

        // This is necessary because we need to have the lang before Ember is
        // loaded
        return parseHashQueryParams().lang;
    }
    catch (e) {
        return CONFIG.DEFAULT_LOCALE;
    }
}

module.exports = {
    getLocale: getLocale,
    init: function () {
        return $.getScript('translations/' + getLocale() + '.js');
    },
    setLocale: function (locale) {
        // Add lang query param to hash, reload
        var hashQueryParams = parseHashQueryParams();
        hashQueryParams.lang = locale;
        window.location.hash = getHashPath() + '?' + qs.stringify(hashQueryParams);
        window.location.reload();
    }
};

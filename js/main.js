var map = require('./map');

$(document).ready(function () {
    map.init('map')
        .on('featureclick', function (data) {
            var template = JST['handlebars_templates/feature.hbs'],
                content = template(data),
                $target = $('#popup');
            $target.empty().html(content).show();
            $('#popup-close').click(function () {
                $('#popup').hide();
                return false;
            });
        });
});

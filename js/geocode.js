var geocoder = new google.maps.Geocoder();

function to_google_bounds(bounds) {
    // bounds: left, bottom, right, top
    return new google.maps.LatLngBounds(
        new google.maps.LatLng(bounds[1], bounds[0]),
        new google.maps.LatLng(bounds[3], bounds[2])
    );
}

function get_component(result, desired_type) {
    var matches = $.grep(result.address_components, function (component, i) {
        return ($.inArray(desired_type, component.types) >= 0);
    });
    if (matches.length >= 0 && matches[0]) {
        return matches[0].short_name;
    }
    return null;
}

function get_street(result) {
    var street_number = get_component(result, 'street_number');
    var route = get_component(result, 'route');
    if (street_number === null || route === null) {
        return null;
    }
    return street_number + ' ' + route;
}

function get_longitude(result) {
    return result.geometry.location.lng();
}

function get_latitude(result) {
    return result.geometry.location.lat();
}

module.exports = {

    geocode: function (address, bounds, state, f) {
        if (!bounds) {
            bounds = [-180, 90, 180, 90];
        }
        geocoder.geocode({
            'address': address,
            'bounds': to_google_bounds(bounds)
        }, function (results, status) {
            for (var i = 0; i < results.length; i++) {
                var result_state = get_component(results[i], 'administrative_area_level_1');
                if (!state || result_state === state) {
                    results[i].latlng = [get_latitude(results[i]),
                                         get_longitude(results[i])];

                    results[i].address = get_street(results[i]);
                    results[i].city = get_component(results[i], 'sublocality_level_1');
                    results[i].state = result_state;
                    results[i].zip = get_component(results[i], 'postal_code');
                    return f(results[i], status);
                }
            }
            return f(null, status);
        });
    }

};

var embed = {},
    id = {};

id.youtube = function (url) {
    // eg, https://www.youtube.com/watch?v=AULJlwoI3TI
    return url.match(/watch\?v=([^\/]+)/)[1];
};

embed.youtube = function (url) {
    var embedUrl = '//www.youtube.com/embed/' + id.youtube(url);
    return '<iframe class="video video-youtube" width="560" height="315" src="' + embedUrl + '" frameborder="0" allowfullscreen></iframe>';
};

id.vimeo = function (url) {
    // eg, https://vimeo.com/101419884
    return url.match(/vimeo.com\/([^\/]+)/)[1];
};

embed.vimeo = function (url) {
    var embedUrl = '//player.vimeo.com/video/' + id.vimeo(url);
    return '<iframe class="video video-vimeo" src="' + embedUrl + '" width="500" height="209" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
};

module.exports = {
    embed: function (url) {
        var type;
        if (url.indexOf('youtube') >= 0) {
            type = 'youtube'; 
        }
        else if (url.indexOf('vimeo') >= 0) {
            type = 'vimeo';
        }
        return embed[type](url);
    }
};

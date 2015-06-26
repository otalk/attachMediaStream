var adapter = require('webrtc-adapter-test');
module.exports = function (stream, el, options) {
    var URL = window.URL;
    var opts = {
        autoplay: true,
        mirror: false,
        muted: false,
        contextmenu: false
    };
    var element = el || document.createElement('video');
    var item;

    if (options) {
        for (item in options) {
            opts[item] = options[item];
        }
    }

    if (opts.autoplay) element.autoplay = 'autoplay';
    if (opts.muted) element.muted = true;
    if (opts.mirror) {
        ['', 'moz', 'webkit', 'o', 'ms'].forEach(function (prefix) {
            var styleName = prefix ? prefix + 'Transform' : 'transform';
            element.style[styleName] = 'scaleX(-1)';
        });
    }
    if (!opts.contextmenu) {
        element.oncontextmenu = function () { return false; };
    }
    adapter.attachMediaStream(element, stream);
    return element;
};

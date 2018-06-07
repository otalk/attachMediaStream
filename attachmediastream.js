var adapter = require('webrtc-adapter');

module.exports = function (stream, el, options) {
    var item;
    var element = el;
    var opts = {
        autoplay: true,
        mirror: false,
        muted: false,
        audio: false,
        disableContextMenu: false
    };

    if (options) {
        for (item in options) {
            opts[item] = options[item];
        }
    }

    if (!element) {
        element = document.createElement(opts.audio ? 'audio' : 'video');
    } else if (element.tagName.toLowerCase() === 'audio') {
        opts.audio = true;
    }

    if (opts.disableContextMenu) {
        element.oncontextmenu = function (e) {
            e.preventDefault();
        };
    }

    if (opts.autoplay) element.autoplay = 'autoplay';
    if (opts.muted) element.muted = true;
    if (!opts.audio && opts.mirror) {
        ['', 'moz', 'webkit', 'o', 'ms'].forEach(function (prefix) {
            var styleName = prefix ? prefix + 'Transform' : 'transform';
            element.style[styleName] = 'scaleX(-1)';
        });
    }

    if (adapter.browserDetails.browser === 'safari') {
        element.setAttribute('playsinline', true);
    }

    element.srcObject = stream;
    return element;
};

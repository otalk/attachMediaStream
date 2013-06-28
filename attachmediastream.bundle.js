(function(e){if("function"==typeof bootstrap)bootstrap("attachmediastream",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeAttachmediastream=e}else"undefined"!=typeof window?window.attachmediastream=e():global.attachmediastream=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports = function (element, stream, play) {
    var autoPlay = (play === false) ? false : true;

    if (autoPlay) element.autoplay = true;

    // handle mozilla case
    if (window.mozGetUserMedia) {
        element.mozSrcObject = stream;
        if (autoPlay) element.play();
    } else {
        if (typeof element.srcObject !== 'undefined') {
            element.srcObject = stream;
        } else if (typeof element.mozSrcObject !== 'undefined') {
            element.mozSrcObject = stream;
        } else if (typeof element.src !== 'undefined') {
            element.src = URL.createObjectURL(stream);
        } else {
            return false;
        }
    }

    return true;
};

},{}]},{},[1])(1)
});
;
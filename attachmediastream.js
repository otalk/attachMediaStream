module.exports = function (element, stream, play) {
    var autoPlay = (play === false) ? false : true;
    var URL = window.URL;

    if (autoPlay) element.autoplay = true;

    // this first one should work most everywhere now
    // but we have a few fallbacks just in case.
    if (URL && URL.createObjectURL) {
        element.src = URL.createObjectURL(stream);
    } else if (element.srcObject) {
        element.srcObject = stream;
    } else if (element.mozSrcObject) {
        element.mozSrcObject = stream;
    } else {
        return false;
    }

    return element;
};

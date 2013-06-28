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

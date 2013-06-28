# attachMediaStream

## What is this?

A tiny browser module for attaching a media stream to a video element. It handles the differences between browsers.

Suitable for use with browserify/CommonJS on the client. 

If you're not using browserify or you want AMD support use `attachmediastream.bundle.js`.


## Installing

```
npm install attachmediastream
```

## How to use it


Makes it easy to attach video streams to video tags.

```js
var getUserMedia = require('getusermedia');
var attachMediaStream = require('attachmediastream');

// get user media
getUserMedia(function (err, stream) {
    // if the browser doesn't support user media
    // or the user says "no" the error gets passed
    // as the first argument.
    if (err) {
       console.log('failed');
    } else {
       console.log('got a stream', stream);  
       // attaches a stream to an element
       attachMediaStream(document.getElementById('myVideo'), stream);
    }
});
```

## Why? Browsers do it differently, that's why

## Other Details

The module's main function returns `true` if successful and `false` otherwise. In case that's useful. But if you're able to getUserMedia to begin with, attaching it shouldn't really fail.

## License

MIT

## Created By

If you like this, follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.


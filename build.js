var bundle = require('browserify')(),
    fs = require('fs');


bundle.add('./attachmediastream');
bundle.bundle({standalone: 'attachmediastream'}).pipe(fs.createWriteStream('attachmediastream.bundle.js'));

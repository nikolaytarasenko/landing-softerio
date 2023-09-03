const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pugs = require('gulp-pug');

const pug = () => {
    return src(path.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'PUG',
                message: error.message
            }))
        }))
        .pipe(pugs({
            pretty: true
        }))
        .pipe(dest(path.pug.dest));
}

module.exports = pug;
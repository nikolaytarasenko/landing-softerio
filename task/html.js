const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const fileInclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');

const html = () => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: 'HTML',
                message: error.message
            }))
        }))
        .pipe(fileInclude())
        .pipe(size({ title: "Before:" }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title: "After:" }))
        .pipe(dest(path.html.dest));
}

module.exports = html;
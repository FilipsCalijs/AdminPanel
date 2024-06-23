const gulp = require("gulp");  // Corrected 'require'
const webpack = require('webpack-stream');

const dist = "/Users/Filip/Desktop/Programma/PHP/project/admin";
gulp.task("copy-html", () => {
    return gulp.src("./app/src/index.html")
        .pipe(gulp.dest(dist));
});

gulp.task("build-js", () => {
    return gulp.src("./app/src/main.js")
    .pipe(webpack({
        mode: 'development',
        output: {
            filename = "script.js"
        }
    }))
    .pipe(gulp.dest(dist))
});
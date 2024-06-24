const gulp = require("gulp");  // Corrected 'require'
const webpack = require('webpack-stream');
const sass = require("gulp-sass");
                // window: B:/promma/xampp/htdocs/react_admin/project/admin
                // mac: /Users/Filip/Desktop/Programma/PHP/project/admin
const dist = "B:/promma/xampp/htdocs/react_admin/project/admin";
gulp.task("copy-html", () => {
    return gulp.src("./app/src/index.html")
        .pipe(gulp.dest(dist));
});

gulp.task("build-js", () => {
    return gulp.src("./app/src/main.js")
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: "script.js"
        },
        watch: false,
        devtool: "source-map",
        module: {
        rules: [
            {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: [
                    ['@babel/preset-env', { debug: true, corejs: 3, useBuiltIns: "usage", targets: "defaults" }],
                    "@babel/react"
                ]
                }
            }
            }
        ]
        }
    }))
    .pipe(gulp.dest(dist))
});

gulp.task("build-js", () => {
    return gulp.src("./app/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(dist))
});


gulp.task("copy-api", () => {
    return gulp.src("./app/api/**/*.*")
    .pipe(gulp.dest(dist + "/api"))
});

gulp.task("copy-assets", () => {
    return gulp.src("./app/assets/**/*.*")
    .pipe(gulp.dest(dist + "/assets"))
});
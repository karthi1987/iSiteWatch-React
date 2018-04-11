/* 
 * this file handles gulp for /app-src and /mock/home
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

var paths = {

    styles: {
        src: './src/framework/scss/**/*.scss',
        files: '/src/framework/scss/**/*.scss',
        dest: './dist/css/'
    },

    images: {
        src: './src/app/assets/images',
        files: './src/app/assets/images/*',
        dest: './dist/img/'
    },

    static: {
        src: './src/mock/app/assets/scss/**/*.scss',
        files: './src/mock/app/assets/scss/**/*.scss',
        dest: './dist/src/mock/app/assets/css'
    },

    json: {
        src: './src/assets/json/**/*.json',
        files: './src/assets/json/**/*.json',
        dest: './dist/assets/json/'
    },

    html: {
        src: './src/',
        files: './src/*.html',
        dest: './dist/'
    },

    login: {
        src: './src/login/index.html',
        files: '.src/login/index.html',
        dest: './dist/login/'
    },

    endpoints: {
        src: './src/endpoints/',
        files: './src/endpoints/*.js',
        dest: './dist/js/'
    }
};


gulp.task('sass', function(){
    return gulp.src(paths.styles.files)
        .pipe(sass({
            outputStyle: 'uncompressed',
            includePaths : [ paths.styles.src ]

        }))
        .on('error', function(error){
            var errorString = '[' + error.plugin + ']';
            errorString += ' ' + error.message.replace('\n',''); // Removes new line at the end

            if (error.fileName)   { errorString += ' in ' + error.fileName; }
            if (error.lineNumber) { errorString += ' on line ' + error.lineNumber; }

            console.error(errorString);
        })
        //.pipe(prefix('last 2 version', 'Explorer > 8', 'iOS > 6', 'Android > 3'))
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('static', function(){
    return gulp.src(paths.static.files)
        .pipe(sass({
            outputStyle: 'uncompressed',
            sourceComments: 'map',
            includePaths : [ paths.static.src ]
        }))
        .on('error', function(error){
            var errorString = '[' + error.plugin + ']';
            errorString += ' ' + error.message.replace('\n',''); // Removes new line at the end

            if (error.fileName)   { errorString += ' in ' + error.fileName; }
            if (error.lineNumber) { errorString += ' on line ' + error.lineNumber; }

            console.error(errorString);
        })
        .pipe(prefix('last 2 version', 'Explorer > 8', 'iOS > 6', 'Android > 3'))
        .pipe(gulp.dest(paths.static.dest));
});

gulp.task('images', function() {
    return gulp.src(paths.images.files)
        .pipe(gulp.dest(paths.images.dest));
});

gulp.task('json', function() {
    return gulp.src(paths.json.files)
        .pipe(gulp.dest(paths.json.dest));
});

gulp.task('endpoints', function() {
    return gulp.src(paths.endpoints.files)
        .pipe(gulp.dest(paths.endpoints.dest));
});

gulp.task('login', function() {
    return gulp.src(paths.login.files)
        .pipe(gulp.dest(paths.login.dest));
});

gulp.task('html', function() {
    return gulp.src(paths.html.files)
        .pipe(gulp.dest(paths.html.dest));
});


gulp.task('build', ['sass','images', 'static', 'json', 'html', 'login', 'endpoints'] , function() {});

gulp.task('watch', ['static', 'sass'], function() {
    gulp.watch(paths.static.files, ['static'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/scss)/,'') + ' was ' + evt.type + ', compiling...'
            );
        });
    gulp.watch(paths.styles.files, ['sass'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/scss)/,'') + ' was ' + evt.type + ', compiling...'
            );
        });
});

// This is the default task - which is run when `gulp` is run
// The tasks passed in as an array are run before the tasks within the function
gulp.task('default', ['sass', 'images'], function() {
    gulp.watch(paths.styles.files, ['sass'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/scss)/,'') + ' was ' + evt.type + ', compiling...'
            );
        });

    gulp.watch(paths.images.files, ['images'])
        .on('change', function(evt) {
            console.log(
                '[watcher] File ' + evt.path.replace(/.*(?=\/src)/,'') + ' was ' + evt.type + ', moving...'
            );
        });
});

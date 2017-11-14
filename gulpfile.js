var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('process', function() {
  return gulp.src('sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
});


gulp.task('browser-sync', ['process'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	
	gulp.watch("sass/*.scss", ['process']);
	gulp.watch("index.html", ['watch-html']);
	gulp.watch("*.js", ['watch-html']);
});

gulp.task('watch-html', ['process'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('default', ['browser-sync']);
let gulp = require('gulp');
let sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', () => {
  return gulp.src('./sass/main.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', () =>  {
  gulp.watch('./sass/**/*.scss', ['sass']);
});


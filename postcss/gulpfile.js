var gulp = require('gulp');
var postcss = require('gulp-postcss');
var path = {
  post_src : 'src/postcss/*.css',
  css_dest : 'dist/css',
};

gulp.task('build-postcss', function() {
  return gulp.src(path.post_src)
    .pipe(postcss([
      require('autoprefixer')({}),
      require('cssnano')
    ]))
    .pipe(gulp.dest(path.css_dest));
});

gulp.task('default', ['css']);

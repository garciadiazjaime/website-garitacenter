var gulp = require('gulp');
var gulpif = require('gulp-if');
var sprity = require('sprity');
var del = require('del');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');


gulp.task('sprites:generate', () => {
  return sprity.src({
    src: './resources/**/*.{png,jpg}',
    style: './sprite.scss',
    dimension: [{
      ratio: 1, dpi: 72
    }],
    split: true,
    orientation: 'binary-tree',
    margin: 0,
    processor: 'sass',
  })
  .pipe(gulpif('*.png', gulp.dest('./public/images/sprites'), gulp.dest('./src/shared/theme')))
});

gulp.task('clean:sprites', () => {
  return null;
  return del([
    './public/images/sprites'
  ]);
});

gulp.task('replace:sprite_url', () => {
  gulp.src(['./src/shared/theme/sprite.scss'])
    .pipe(replace(/\.\.\/images/g, '/images/sprites'))
    .pipe(gulp.dest('./src/shared/theme/'));
});

gulp.task('build:sprites', (cb) => {
  runSequence('clean:sprites', 'sprites:generate', 'replace:sprite_url', cb);
});

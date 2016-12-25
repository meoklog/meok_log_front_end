
const gulp = require('gulp')
const preprocessEnv = require('gulp-preprocess')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const browserify = require('gulp-browserify')

gulp.task('html:dev', function () {
  const currentEnv = 'dev'
  const env = preprocessEnv({ context: { NODE_ENV: currentEnv, DEBUG: true } })
  gulp
    .src('./templates/index.tpl')
    .pipe(env)
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./templates'))
})

gulp.task('sass:dev', function () {
  gulp
    .src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static'))
})
gulp.task('js:dev', function () {
  gulp
    .src('app/js/app.js')
    .pipe(rename('main.js'))
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./static'))
})

gulp.task('watch:dev', function () {
  gulp.watch('app/**/*.*', ['sass:dev', 'js:dev'])
  gulp.watch('templates/*.tpl', ['html:dev'])
})

gulp.task('default', ['html:dev', 'sass:dev', 'js:dev', 'watch:dev'])

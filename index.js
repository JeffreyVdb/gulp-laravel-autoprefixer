"use strict";

module.exports = function (task) {
  task.setRequirements(['gulp-autoprefixer']);
  task.exec(function () {
    var laravel = this.getLaravel(),
        gulp = this,
        baseDir = laravel.config.cssOutput,
        cssFiles = baseDir + '/**/*.css';

    if (laravel.config.production) {
      return gulp.src(cssFiles)
        .pipe(task.plugins.autoprefixer())
        .pipe(gulp.dest(baseDir));
    }

    task.notifier.message('Not in production environment, not minimizing css');
  });
};
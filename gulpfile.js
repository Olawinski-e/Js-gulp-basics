var gulp = require("gulp");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
});

gulp.watch("src/*html").on("change", reload);
gulp.watch("src/*js").on("change", reload);
gulp.watch("src/*css").on("change", reload);

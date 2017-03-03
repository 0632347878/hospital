var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
// });


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './',
		},
		notify: false
	});
});

gulp.task('watch',['browser-sync'], function(){
	gulp.watch('./css/*.css', browserSync.reload );
	gulp.watch('./*.html', browserSync.reload);
	// gulp.watch('./**/*.js', browserSync.reload);
});

// or...

// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });
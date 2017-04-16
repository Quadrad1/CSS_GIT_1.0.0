var gulp = require('gulp'),
    sass = require('gulp-sass'),
    smartgrid = require('smart-grid');
    var gcmq = require('gulp-group-css-media-queries');
    var sassGlob = require('gulp-sass-glob');

//     /* It's principal settings in smart grid project */
//     var settings = {
//         outputStyle: 'less', /* less || scss || sass || styl */
//         columns: 12, /* number of grid columns */
//         offset: "30px", /* gutter width px || % */
//         container: {
//             maxWidth: '1200px', /* max-width оn very large screen */
//             fields: '30px' /* side fields */
//         },
//         breakPoints: {
//             lg: {
//                 'width': '1100px', /* -> @media (max-width: 1100px) */
//                 'fields': '30px' /* side fields */
//             },
//             md: {
//                 'width': '960px',
//                 'fields': '15px'
//             },
//             sm: {
//                 'width': '780px',
//                 'fields': '15px'
//             },
//             xs: {
//                 'width': '560px',
//                 'fields': '15px'
//             }
//             /*
//             We can create any quantity of break points.
//
//             some_name: {
//                 some_width: 'Npx',
//                 some_offset: 'N(px|%)'
//             }
//             */
//         }
//     };
// smartgrid('./path-to-your-folder', settings)

gulp.task('default', function(){
  console.log("work");
});
gulp.task('sass', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gcmq())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});


gulp.task('media', function () {
    gulp.src('./css/*.css')
        .pipe(gcmq())
        .pipe(gulp.dest('css/ready'));
});

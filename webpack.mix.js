let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/assets/js/app.js', 'public/js')
//    .sass('resources/assets/sass/app.scss', 'public/css');

mix.scripts([
  'resources/assets/js/jquery.min.js',
  // 'resources/assets/js/bootstrap.js',
  'resources/assets/js/jquery.themepunch.tools.min.js',
  'resources/assets/js/bootstrap.min.js',
  'resources/assets/js/plugins.js',
  'resources/assets/js/scripts.js',
  'resources/assets/js/axios.js',
  'resources/assets/js/vue.js',
  'resources/assets/js/wow.min.js',
  'resources/assets/js/main.js'
    // 'resources/assets/js/main.js',
  ], 'public/js/main.js').styles([
    'resources/assets/css/bootstrap.min.css',
    'resources/assets/css/plugins.css',
    'resources/assets/css/animate.css',
    'resources/assets/css/style.css',
    'resources/assets/css/red-mtingweb.css'
     ], 'public/css/main.css');

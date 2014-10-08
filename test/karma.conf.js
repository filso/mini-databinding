module.exports = function(config) {
  config.set({
    basePath: '../app',
    files: [
      'bower_components/jquery/jquery.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js',

      'bower_components/lodash/dist/lodash.js',

      'scripts/model/Subject.js',
      'scripts/model/Observer.js',
      'scripts/model/ObserverList.js',

      "scripts/controller/ListCtrl.js",
      "scripts/model/List.js",
      "scripts/view/AddView.js",
      "scripts/view/CountView.js",
      "scripts/view/ListView.js",
      'scripts/**/*.js'

    ],
    preprocessors: {},
    browserNoActivityTimeout: 20000,
    exclude: [],
    frameworks: ['jasmine'],
    reporters: ['progress'],
    runnerPort: 9100,
    colors: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000
  });
};
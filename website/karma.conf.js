const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['src/app/tests/**/*.test.js'],
    preprocessors: {
        'src/app/tests/**/*.test.js':['webpack', 'sourcemap']

    },
    reporters: ['mocha'],  
    client: {
      mocha: {
        timeout: '5000'
      }
    }, 
    webpackServer: {
        noInfo: true
      }
  });
};
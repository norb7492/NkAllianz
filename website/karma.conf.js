const webpack = require('webpack');
const webpackConfig = require('./webpack.dev.js');

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
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        rules: [
          { 
            test: /\.js$/, 
            use: 'babel-loader' 
          },
          {
            test: /\.scss|css$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(eot|woff|woff2|ttf|svg|ico|png|jpe?g|gif)(\?\S*)?$/,
            use: ['file-loader']
        }
        ]
      }
    }, 
    webpackServer: {
        noInfo: true
      }
  });
};
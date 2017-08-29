const webpack = require('webpack');
const path = require('path');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['src/app/tests/unit-tests/**/*.test.js'],
    preprocessors: {
        'src/app/tests/unit-tests/**/*.test.js':['webpack', 'sourcemap']

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
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['airbnb'] 
            }
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
      },
      babelPreprocessor: {
        options: {
          presets: ['airbnb']
        }
      }
  });
};
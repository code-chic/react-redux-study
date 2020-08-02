const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const resolveApp = realtivePath => {
  return path.join(__dirname, realtivePath)
}

/**
 * @namespace module.exports
 * @type webpack.Configuration
 */
module.exports = {
  entry: {
    main: resolveApp('src/main.js')
  },

  output: {
    path: resolveApp('dist'),
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: ''
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolveApp('src'),
      'components': resolveApp('src/components'),
      'views': resolveApp('src/views')
    }
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader?cacheDirectory',
      options: {}
    }]
  },

  plugins: [
    new HtmlPlugin({
      template: resolveApp('public/index.html'),
      filename: 'index.html'
    })
  ],

  devServer: {
    contentBase: false,
    host: '127.0.0.1',
    port: 8080,
    historyApiFallback: true,
    proxy: {},
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    watchOptions: {
      poll: 2000
    }
  },

  node: {
    console: true
  }
}

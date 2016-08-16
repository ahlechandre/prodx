const debug = (process.env.NODE_ENV !== 'production');
const path = require('path');
const webpack = require('webpack');
const devPlugins = [];
const prodPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    mangle: false,
    sourcemap: false,
  }),
];

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'assets/'),
    publicPath: '/assets/',
    filename: debug ? 'app.js' : 'app.min.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          plugins: [
            'react-html-attrs',
            'transform-class-properties',
            'transform-decorators-legacy',
          ],
        },
      },
    ],
  },
  plugins: debug ? devPlugins : prodPlugins,
};

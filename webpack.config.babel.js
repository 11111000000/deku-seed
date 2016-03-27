import webpack from 'webpack';
import autoprefixer from 'autoprefixer-core';
import fs from 'fs';
import StringReplacePlugin from 'string-replace-webpack-plugin';
import packageJson from './package.json';
import loaders from './webpack.loaders.js';

const { ENV, MINI } = process.env;

const majorVersion = packageJson.version.split('.')[0],
      publicPath = '/';

console.log(` [ WEBPACK ] ${ENV} `);

const plugins = [

  new StringReplacePlugin(),

  new webpack.DefinePlugin({
    VERSION: JSON.stringify(packageJson.version),
    ENV: JSON.stringify(ENV),
    LAMBDA: (function () { return null })
  }),

  new webpack.ProvidePlugin({
    debug: 'debug',
    stateful: 'deku-stateful',
    c: 'classnames'

  })

];

const minificationPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
]

const entries = {

  'default': [
    (`${__dirname}/modules/index.js`)
  ],

  'development' : [
    "webpack/hot/dev-server",
    (`${__dirname}/modules/index.js`)
  ]
}

module.exports = {

  context: __dirname + "/modules",

  entry: entries[ENV] || entries.default,

  plugins: [...plugins, ...( MINI ? minificationPlugins : [])],

  output: {
    path: `${__dirname}/www`,
    pathinfo: true,
    filename: "bundle.js",
    publicPath: publicPath
  },

  node: {
    fs: "empty"
  },

  resolve: {
    root: __dirname + "/modules",
    moduleDirectories: [ "node_modules" ],
    extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx", '.styl']
  },

  module: {
    loaders: loaders({})
  },

  postcss: [
    autoprefixer({
      browsers: ["last 3 versions", "IE > 7", "iOS > 5"]
    })
  ]

}

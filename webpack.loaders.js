

import StringReplacePlugin from 'string-replace-webpack-plugin'

export default function (config) {

  return [

    { test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=es2015' },
    { test: /\.css$/,  loader: "style!css!postcss" },
    { test: /\.styl$/,
      loader: "style!css!postcss!stylus?paths[]=node_modules&paths[]=app" },
    { test: /\.html$/,
      loader: "html-loader" },
    { test: /\.json$/,  loader: "json-loader" },
    { test: /\.woff2?(?:\?v=[\d.]+)?$/,
      loader: "url-loader?limit=10000&minetype=application/font-woff" },
    { test: /\.ttf(?:\?v=[\d.]+)?$/,  loader: "file-loader" },
    { test: /\.eot(?:\?v=[\d.]+)?$/,  loader: "file-loader" },
    { test: /\.otf(?:\?v=[\d.]+)?$/,  loader: "file-loader" },
    { test: /\.svg(?:\?v=[\d.]+)?$/,  loader: "file-loader" },
    { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
    { test: /\.md$/, loader: "html!markdown-highlight?sanitize=false" },
    { test: /\.js$/, loader:  StringReplacePlugin.replace({
      replacements: [{
        pattern: /\/\/api.temasys.com.sg/ig,
        replacement: () => 'https://api.temasys.com.sg' }

                    ]})}

  ]

}

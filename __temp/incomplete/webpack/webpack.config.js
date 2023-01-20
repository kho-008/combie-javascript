const path = require('path');
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const uglifyJS = require('uglify-js');

module.exports = {
  entry: './src/entry.js',
  output: {
    filename: '__temp.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  plugins: [
    new MergeIntoSingleFilePlugin({
        files: [{
            // dest: "output.js",
            dest: code => {
              const min = uglifyJS.minify(code, {sourceMap: {
                filename: 'vendor.js',
                url: 'vendor.js.map'
              }});
              return {
                'vendor.js':min.code,
                'vendor.js.map': min.map
              }
            },
            src: [
                //  will work too
                //  'node_modules/jquery/**/*.min.js',
                './src/mod/mod.js',
                './src/mod/second.js',
            ],
        }]
    }),
  ]
};
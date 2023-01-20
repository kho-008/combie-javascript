const concat = require('concat');

const fileList = [
  './src/mod/second.js',
  './src/mod/mod.js',
];

concat(fileList, 'output.js');
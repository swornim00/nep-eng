'use strict';

var NepaliData = require('./data.js')

function translate(english){
  return NepaliData.data[english];
}

exports.translate = translate;

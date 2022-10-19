const Color = require('color');



const FORMATS = ['hex', 'rgb', 'hsl'];

const getFormat = (format) => {
  if (!format || FORMATS.indexOf(format) < 0) {
    return 'hex';
  }
  return format;
}

const getColorString = (color, format) => {
  const innerFormat = getFormat(format);
  if (innerFormat === 'hex') {
    return color[innerFormat]();
  }
  return color[innerFormat]().round().string();
}



module.exports = {
  getColorString,
}
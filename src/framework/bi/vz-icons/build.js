var webfontsGenerator = require('webfonts-generator'),
    glob = require('glob'),
    path = require('path');

webfontsGenerator({
  files: glob.sync('icons/**/*.svg'),
  dest: 'dist/',
  fontName: 'VerizonIcons',
  cssTemplate: path.join(__dirname, 'templates/css.hbs'),
  html: true,
  htmlTemplate: path.join(__dirname, 'templates/html.hbs'),
  templateOptions: {
    classPrefix: 'vz-',
    baseClass: 'vz'
  },
  descent: 140,

  types: [ 'eot', 'woff', 'ttf' ]
}, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.log('Done!');
  }
});

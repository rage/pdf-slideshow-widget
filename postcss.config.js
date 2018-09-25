module.exports = {
  plugins: [
    /* eslint-disable global-require */
    require('autoprefixer')(),
    require('postcss-class-prefix')('pdf-slideshow-', { ignore: [/cm/, /CodeMirror/, 'focus-ring', /rc-slider/] }),
    /* eslint-enable global-require */
  ],
};

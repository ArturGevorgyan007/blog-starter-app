// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  images: {
    loader: 'imgix',
    path: '/',
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

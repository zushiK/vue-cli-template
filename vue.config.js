module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "./src/assets/scss/main.scss";'
      }
    }
  }
};

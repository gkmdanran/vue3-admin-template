
module.exports = {
  // outputDir:'build/gkm/',
  // assetsDir:'static',
  // publicPath: '/gkm/',
  devServer: {
    disableHostCheck: true,
    open: false,
    proxy: {
      '^/api': {
        target: 'http://gkmdanran.com',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
}

module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /.html$/,
          loader: 'vue-template-loader',
          exclude: /index.html/
        }
      ]
    },
    resolve: {
      alias: {
        // A trailing $ signify an exact match
        three$: process.env.NODE_ENV === 'production' ? 'three/build/three.min' : 'three/build/three'
      }
    }
  },
  chainWebpack: config => {
    config.plugin('provide').use(require('webpack').ProvidePlugin, [ {
      THREE: 'three'
    } ])
  }
}

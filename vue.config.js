module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: {
    devtool: "source-map",
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

  // The internal webpack config is maintained using webpack-chain.
  // The library provides an abstraction over the raw webpack config, with the ability to define named
  // loader rules and named plugins, and later "tap" into those rules and modify
  // their options. This allows for more fine-grained modification of the internal webpack config.
  // This approach avoid the require of a webpack instance declaration at beginning of this file.
  chainWebpack: config => {
    config.plugin('provide').use(require('webpack').ProvidePlugin, [
      {
        THREE: 'three'
      }
    ])
  }
}

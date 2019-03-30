const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const production = process.env.NODE_ENV === 'production'

module.exports = {
  productionSourceMap: false,
  publicPath: production ? './' : '/',
  configureWebpack: () => {
    let config = {
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
      },
      plugins: []
    }

    if (production) {
      // Prerender on production only
      config.plugins.push(
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          // Required - Routes to render.
          routes: [ '/' ]
        })
      )

      // Adjust assets size limit to account for Three.js (and remove size limit warnings)
      config.performance = {
        hints: false, // default -> 'warning'
        maxAssetSize: 800000,
        maxEntrypointSize: 800000
      }
    }

    return config
  },
  chainWebpack: config => {
    config.plugin('provide').use(require('webpack').ProvidePlugin, [ {
      THREE: 'three'
    } ])
  }
}

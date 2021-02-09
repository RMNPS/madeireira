const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

var plugins = [
]

if (process.env.NODE_ENV === "production") {
  plugins.push(new BundleAnalyzerPlugin())
}


module.exports = {
  configureWebpack: {
    plugins: plugins,
    performance: {
      hints: false
    },
    optimization: {
      splitChunks: {
        // Required for webpack to respect the vendor chunk. See
        // https://medium.com/dailyjs/webpack-4-splitchunks-plugin-d9fbbe091fd0
        // for more details.
        chunks: 'initial',
        cacheGroups: {
          vendors: {
            // Put everything from node_modules in this chunk
            test: /[\\/]node_modules[\\/]/,
          },
        },
      },
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
    config.plugin('VuetifyLoaderPlugin').tap(args => [{
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    }])
  },
  "transpileDependencies": [
    "vuetify"
  ]
}
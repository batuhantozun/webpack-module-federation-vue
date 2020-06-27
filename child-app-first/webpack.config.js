const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.prod ? 'source-map' : 'eval-cheap-module-source-map',
  entry: './src/main',
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    overlay: true
  },
  output: {
    // path: path.resolve(__dirname, './dist'),
    publicPath: "http://localhost:3002/",
  },
  resolve: {
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      'vue': '@vue/runtime-dom'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.prod }
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new ModuleFederationPlugin({
      name: "childApp",
      library: { type: "var", name: "childApp" },
      filename: "remoteEntry.js",
      exposes: {
        "./ChildAppHome": "./src/components/ChildHome.vue",
        "./ChildAppPage1": "./src/components/Page1.vue",
        "./ChildAppPage2": "./src/components/Page2.vue",
      },
      shared: ["vue", "vue-router"],
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
})

const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const PORT = 8081;
const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: PORT,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing", // Loads a global project variable called marketing
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap", // When someone asks for @marketing/Marketing
        // give them bootstrap.js
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); // Merge these two files (Dev config)

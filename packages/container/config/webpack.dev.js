const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const PORT = 8082;

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8082/",
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
      name: "containerHost",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
        auth: "auth@http://localhost:8083/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig); // Merge these two files (Dev config)

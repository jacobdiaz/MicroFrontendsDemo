const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN; //! process.env => string where our prod. is located. PRODUCTION_DOMAIN is something we set up

const productionConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js", // when we build files, use this as a template on how to name (used for cacheing)
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "containerHost",
      remotes: {
        // Points to production domains!
        marketing: `marketing@${domain}/marketing/remoteEntry.js`, // TODO: NO AWS DOMAIN RIGHT NOW
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, productionConfig);

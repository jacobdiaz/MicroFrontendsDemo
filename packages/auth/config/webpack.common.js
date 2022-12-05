module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // Whenever we have a js file we want to process
        // it
        exclude: /node_modules/, // dont run this on node modules
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};

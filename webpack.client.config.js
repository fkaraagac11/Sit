const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/client/index.js",
  output: {
    path: path.resolve(__dirname, "prod-bundle/static"),
    filename: "react-bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/server/static/index.html",
    }),

    new webpack.DefinePlugin({
      "process.env.SIT_API_URL": JSON.stringify("http://localhost:5000"),
    }),
  ],
};

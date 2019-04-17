const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./static/javascripts/main.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname + "/build", "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-url-loader"
        }
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: "../stylesheets/main.css" })]
};

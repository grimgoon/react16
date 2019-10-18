const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash:6].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\(.js|jsx)$/,
        loader: "",
        exclude: /node_modules/
      }
    ]
  }
};

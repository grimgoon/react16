const path = require("path");
const autoprefixer = require("autoprefixer");

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
        // Short version of use
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [
                autoprefixer({
                  browsers: ["> 1%", "last 2 versions"]
                })
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};

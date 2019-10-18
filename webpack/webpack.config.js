const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
              modules: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [autoprefixer()]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=80000&name=images/[name].[ext]"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
      inject: "body"
    })
  ]
};

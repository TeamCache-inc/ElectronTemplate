const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./app/src/index.js",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // loads .js/jsx/json files
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, "app/src")],
                loader: "babel-loader",
                resolve: {
                    extensions: [".js", ".jsx", ".json"]
                }
            },
            {
                // loads .html files
                test: /\.(html)$/,
                include: [path.resolve(__dirname, "app/src")],
                use: {
                    loader: "html-loader"
                }
            },
            {
                // loads .css files
                test: /\.css$/,
                include: [path.resolve(__dirname, "app/src")],
                use: [                    
                    "style-loader",
                    "css-loader"
                ]
            },
            // loads common image formats
            {
              test: /\.(svg|png|jpg|gif)$/,
              include: [
                path.resolve(__dirname, "resources/images")
              ],
              type: "asset/inline"
            },
            // loads common font formats
            {
              test: /\.(eot|woff|woff2|ttf)$/,
              include: [
                path.resolve(__dirname, "resources/fonts")
              ],
              type: "asset/inline"
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "app/src/index.html"),
          filename: "index.html"
      })
    ]
};

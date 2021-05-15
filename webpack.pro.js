const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin= require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]_[chunkhash:8].js"
    },
    module: {
        rules: [
            {
                test: /.js$/i,
                use: "babel-loader"
            },
            {
                test: /.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options:{
                            filename: "[name]_[chunkhash:8][ext]"
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            filename: "[name]_[chunkhash:8][ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name]_[contenthash:8].css"
        }),
        // new OptimizeCssAssetsPlugin({
        //    assetNameRegExp: /\.css$/g,
        //    cssProcessor: require("cssnano")
        // })
        new HtmlWebpackPlugin({
            template: "./src/search.html"
        }) 
    ],
    mode: "production"
}
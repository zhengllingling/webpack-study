// const path = require("path");

// module.exports = {
//     entry: "./src/index.js", 
//     mode: "development",
//     output: {
//         path: path.join(__dirname,"dist"),
//         filename: "bundle.js"
//     }
// }

// const path = require("path");

// module.exports = {
//     entry:{
//         app: "./src/app.js",
//         search: "./src/search.js"
//     },
//     output: {
//         path: path.join(__dirname, 'dist'),
//         filename: "[name].js"
//     },
//     mode: "development"
// }

// const path = require("path");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         path: path.join(__dirname, "dist"),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /.txt$/i,
//                 use: 'raw-loader'
//             }
//         ]
//     },
//     mode: "development"
// }

// const path = require("path");
// const ZipPlugin = require("zip-webpack-plugin");

// module.exports = {
//     entry: "./src/index.js",
//     output: {
//         path: path.join(__dirname, "dist"),
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: /.txt$/i,
//                 use: "raw-loader"
//             }
//         ]
//     },
//     plugins: [
//         new ZipPlugin({
//             path: path.join(__dirname, "dist"),
//             filename: 'webpackStudy.zip'
//         })
//     ],
//     mode: "development"
// }

const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js$/i,
                use: "babel-loader"
            },
            // {
            //     test: /.css$/i,
            //     use:[
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
            {
                test: /.scss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            // {
            //     test: /.(jpg|jpeg|png|gif)$/,
            //     use: "file-loader"
            // },
            {
                test: /.(jpg|jpeg|png|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options:{
                            limit: 10240
                        }
                    }
                ]
            },
            {
                test: /.(woff|woff2|eot|ttf|otf)$/,
                use: "file-loader"
            }
        ]
    },
    mode: "development",
    // watch: true // 开启文件监听 文件有变化会自动打包 - 还可以配置其他参数 参考文档 另外一种方式可以在命令行中加--watch
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: "./dist",
        hot: true
    }
}
const TerserPlugin  = require("terser-webpack-plugin")
module.exports = {
    entry: {
        "largeNumber.js": "./src/index.js",
        "largeNumber.min.js": "./src/index.js"
    },
    output: {
        filename: "[name].js",
        library: "largeNumber",
        libraryTarget: "umd",
        libraryExport: "default"
    },
    mode: "none",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/
            })
        ]
    }
}
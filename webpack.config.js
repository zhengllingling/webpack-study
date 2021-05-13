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

const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.txt$/i,
                use: 'raw-loader'
            }
        ]
    },
    mode: "development"
}
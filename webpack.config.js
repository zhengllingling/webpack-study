// const path = require("path");

// module.exports = {
//     entry: "./src/index.js", 
//     mode: "development",
//     output: {
//         path: path.join(__dirname,"dist"),
//         filename: "bundle.js"
//     }
// }

const path = require("path");

module.exports = {
    entry:{
        app: "./src/app.js",
        search: "./src/search.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    mode: "development"
}
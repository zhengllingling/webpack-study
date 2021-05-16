const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCssAssetsPlugin= require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const setMAP = () => {
    const entry = {};
    const htmlWebpackPlugins = [];
    const entryFiles = glob.sync(path.join(__dirname, "./src/views/*/index.js"));
    Object.keys(entryFiles).map((index) => {
        const entryFile = entryFiles[index];
        const match = entryFile.match(/src\/views\/(.*)\/index\.js/);
        console.log(match);
        const pageName = match && match[1];
        entry[pageName] = entryFile;
        htmlWebpackPlugins.push(new HtmlWebpackPlugin({
            inlineSource: '.css$',
            template: path.join(__dirname, `src/views/${pageName}/index.html`),
            filename:`${pageName}.html`,
            chunks: ['vendors', pageName],
            inject: true,
            minify:{
                html5:true,
                collapseWhitespace: true,
                preserveLineBreaks:false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }))
    })
    return { entry, htmlWebpackPlugins }
}
const { entry, htmlWebpackPlugins } = setMAP();
module.exports = {
    entry : entry,
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name]_[chunkhash:8].js"
    },
    module: {
        rules: [
            {
                test: /.html$/,
                use: "inline-html-loader"
            },
            {
                test: /.js$/i,
                use: "babel-loader"
            },
            {
                test: /.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 3, // 在这之前还需加载几个loader
                        }
                    },
                    {
                        loader: "px2rem-loader",
                        options: {
                            remUnit: 108,
                            remPrecision: 8
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                              plugins: [
                                ["autoprefixer"]
                              ]
                            }
                        }
                    },
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
        new CleanWebpackPlugin()
    ].concat(htmlWebpackPlugins),
    mode: "production"
}
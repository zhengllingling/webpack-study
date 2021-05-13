# webpack-study

1.转换ES6语法
2.解析jsx
3.css预处理器
4.压缩混淆
5.图片压缩
...


webpack --config 制定配置文件 默认为webpack.config.js

entry 
1.打包入口
2.通过入口形成一个依赖树
3.webpack是一个模块打包器，即在webpack中万物皆模块，js文件、css文件、图片都是模块
4.支持多入口配置

output
1.打包输出
2.根据多入口打包，webpack输出配置也可以使用占位符区分不同入口打包的输入

loaders
1.将webpack不支持的文件类型转换成webpack支持的类型，然后才能加入依赖树中
2.webpack原生只支持js和json两种文件
3.常用的loader
babel-loader 转换ES6、7的语法
css-loader 支持css文件的加载
less-loader less ——> css 
ts-loader ts ——> js 
file-loader 图片、字体等文件的打包
raw-loader 文件以字符串的形式导入
thread-loader 多进程打包js、css 加快打包速度

plugins
1.增强webpack的功能
2.用于打包出去的js文件优化，资源管理，环境变量的注入等
3.作用于整个构建过程
4.任何loader无法实现的事情，都可以用plugins来实现
5.常用的plugins
CommonsChunkPlugin 将同一个js提取成公共的js
CleanWebpackPlugin 清理构建目录
ExtractTextWebpackPlugin 提取css成独立的css文件
CopyWebpackPlugin 将文件或文件夹拷贝到构建的输出目录
HtmlWebpackPlugin 创建html文件加载输出的bundle
UglifyWebpackPlugin 压缩js
ZipWebpackPlugin 将打包出的资源生成一个zip

mode

需要安装 nodejs 、npm
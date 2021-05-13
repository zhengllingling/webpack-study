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

mode
plugins

需要安装 nodejs 、npm
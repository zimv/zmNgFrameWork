# zmNgFrameWork
angular + gulp + browserify + bower + less

#use

bower install

npm install

gulp or gulp deploy

此架构的优势：

* 按模块换分，每个模块的js代码最终打包生成为一个模块js，在html引入模块资源时很方便
* less最终生成一个css，适用于单页面应用
* 架构默认使用rem布局，可以参照架构里的less代码，支持webfont
* 方便开发，默认gulp任务用于开发，gulp deploy用于压缩发布
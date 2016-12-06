#sss -- react-native项目基础（持续更新）

###git使用规范:
####1.master分支不能提交代码
####2.dev为开发分支（目前先一起使用dev分支，不要随意开分支，合并到master需知会管理员）
**后续扩展dev_xcj，dev_＊**
####3.pro为生产分支（用于构建安卓版本和ios版本）
**后续扩展打tag release_1.0.0,release_2.0.0用于发布app版本迭代回滚**
####4.配置文件修改不要随意提交（沟通管理员，确定无兼容问题，统一修改）

***
###项目结构：
+ 目录ios：原生ios目录
+ 目录android：原生android目录
+ 目录res：资源目录，存放图片等（存放资源方式很多,先统一）
+ 目录app：react-native目录
  + 3131
  + 3131

***
###项目启动：
+ node环境
+ npm install 下载依赖
+ react-native run-ios 启动ios环境
+ react-native run-android 启动android环境
+ http://localhost:8081/debugger-ui （debug调试）

***
###其他：
+ 后续补充...
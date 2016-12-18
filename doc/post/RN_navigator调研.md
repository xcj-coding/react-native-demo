# 探索React Native中的Navigator
不论是web还是mobile，任何一个app的核心组件都是navigation/routing。它是app中任何交互的基础，虽然有很多种实现方式，但它的核心功能还是**贯穿整个app的导航功能**。

当开始一个RN项目时，你首先去要去做的是选取一个正确的路由解决方案。(当然，选项非常多...)

## 目标
在选用一个routers/navigators时的期望
* 每个路径应该很容易被引入。换言之，每个路径只需引用**很少的代码**或**很少的配置数据**就被渲染出来。
* 集成或遵循一个类似的模式（Redux）
* 必须在iOS和Android上都能运行
* 比较容易理解。不应在项目中写过多处理路由的代码。
* 必须有比较**通用的默认选项**但又具备**根据需求灵活制定**的能力。

## 选型
当前(截至2016/12/09)有4种方案，下面介绍各个的优劣

#### Navigator
###### 优点
* 自定义程度非常高，可以做任何事

###### 缺点
* `NavigationExperimental`发布后会被废弃
* 如果不做好配置，无法开箱即用。开发者得写大量跟路由相关的逻辑。

#### ExNavigator
###### 优点
* 路由声明很简单
* 从其他视图推入一个路径很简单

###### 缺点
* 在Navigator之上创建
* 没怎么维护

#### NavigationExperimental
###### 优点
* 在React Native Core中
* 开箱即用
* Facebook在使用

###### 缺点
* 文档
* 还得让开发者写一些额外的代码

#### React Native Simple Router

#### React Native Router Flux
###### 优点
* 在`NavigationExperimental`之上构建
* 很多很好用的默认选项
* 很好用的API接口来跳转视图，如`Action.login()`
* github星很多...
* Redux

###### 缺点
* 示例中的使用比较笨重

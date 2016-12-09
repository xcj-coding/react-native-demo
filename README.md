# sss -- react-native项目基础（持续更新）

### git使用规范:
#### 1.master分支不能提交代码
#### 2.dev为开发分支（目前先一起使用dev分支，不要随意开分支，合并到master需知会管理员）
**后续扩展dev_xcj，dev_＊**
#### 3.pro为生产分支（用于构建安卓版本和ios版本）
**后续扩展打tag release_1.0.0,release_2.0.0用于发布app版本迭代回滚**
#### 4.配置文件修改不要随意提交（沟通管理员，确定无兼容问题，统一修改）

***
### 项目结构：
+ 目录ios：原生ios目录
+ 目录android：原生android目录
+ 目录node_modules：各种第三方包
+ 目录res：资源目录，存放图片等（存放资源方式很多,先统一）
+ 目录doc：第三方组件技术文档
+ 目录app：react-native目录
  + index.js 入口文件,注册store（注意文件以及变量命名）
  + root.js 根文件 -- 引入welcome（注意文件以及变量命名）
  + welcome 欢迎页面 -- 两秒跳转到home（注意文件以及变量命名）
  + views 各种视图（注意文件以及变量命名）
  + components 各种组件（注意文件以及变量命名）
  + global 全局方法（注意文件以及变量命名）
  + actions 各种Action（注意文件以及变量命名）
  + reducers 各种reducer（注意文件以及变量命名）
  
***
### 项目书写注意：

```javascript
/**
 * 1.基础第三方框架引入
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Text} from 'react-native';

/**
 * 2.第三方组件引入
 */
import { Actions } from 'react-native-router-flux';
/**
 * 3.项目组件引入
 */
import { SearchHeader, ListItem } from '../components/';
/**
 * 4.项目reducers引入 || 项目Action引入 || 配置文件引入 || 公用方法引入
 */

/**
 * 5.流转页面
 */
import Home from './views/home'
import Classify from './views/classify'
import Cart from './views/cart'
import Personal from './views/personal'
import NotFound from './views/notFound'
import Detail from './views/detail'

/**
 * 页面内使用常量
 */
const ListView_Test_Array = ['1', '2', '3', '4'];

/**
 * 页面类
 */
class *** extend Component {}

export default ***;
```

***
### 项目启动：
+ node环境
+ npm install 下载依赖
+ react-native run-ios 启动ios环境
+ react-native run-android 启动android环境
+ http://localhost:8081/debugger-ui （debug调试）

***
### 其他：
+ 后续补充...
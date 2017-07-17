# 组件库

***

### VideoPlayer

* source video路径 {{uri : ''}}
* style 播放器样式
* resizeMode 'cover' || 'contain' 默认cover
* paused 是否暂停 默认true
* repeat 是否重复播放 默认false
* onLoadStart 视频开始加载
* onLoad 视频加载完成
* onError 视频出错
* onProgress 视频加载中
* onEnd 视频播放结束

onLoad和onProgress函数中参数为: {
    currentTime: xxx, //当前进度
    duration: xxx //总进度
}

### Swiper

* list : [{ img: //图片路径 }]
* onPress 点击后回调函数
* height 组件高度
* width 组件宽度
可参照中添加相关属性
> https://github.com/leecade/react-native-swiper/blob/master/README.md#properties

### IconList

* tabs : [{ name: '', url : 'icon地址' }]
* isRadius 是否圆形icon
* height 组件高度
* width 组件宽度
* onPress(index) index icon索引

### Header

* transparent 背景是否透明

* leftType 默认为空
    - back 后退按钮
    - list 目录
    - qrcode 二维码
* leftCallback 回调函数，back有默认的回调函数

* rightType 默认为空
    - notice 消息
    - list-1 商品列表1
    - list-2 商品列表2
    - share 分享
    - text 文字
* rightValue 内容
* rightCallback 回调函数

* middleType 默认为搜索框
    - search 搜索框
    - text 文字
    - image 图片
    - input 输入框，作为子类传入
* middleValue 内容
* middleCallback 回调函数

### ArticleItem

* 文章列表项
* item 包含文章的概要信息

### ListItem

* 商品列表项
* item 包含商品的概要信息

### CartListItem

* 购物车商品列表项
* item 包含商品的概要信息

### GoodsNum

* 商品数量修改组件
* id 当前商品的编号
* num 当前商品的数量
* max 商品的最大数量

### CartSettlement

* 购物车结算功能组件
* style 样式
* selectedAll 全选按钮是否选中
* totalPrice 总价
* selectedNum 被选中的不同商品数量

### Lazy Load

Component           | Description
------------------- | --------------------
LazyloadScrollView  | `ScrollView`的扩展， 必须有name属性
LazyloadListView    | `ListView`的扩展，必须有name属性
LazyloadView        | `View`的扩展，`LazyloadScrollView` 或者 `LazyloadListView`的子类，必须有host属性，值同父容器的name属性
LazyloadImage       | 建议用`CacheImage`替代，`Image`的扩展，`LazyloadScrollView` 或者 `LazyloadListView`的子类，必须有host属性，值同父容器的name属性

### CacheImage

* lazyNeed 是否需要懒加载，默认为false，注意：懒加载与缓存互斥，且懒加载优先级高
* cacheNeed 是否需要缓存，默认为false
* 其他同`Image`

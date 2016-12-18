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

* leftType
    - back 后退按钮
    - list 目录
    - qrcode 二维码
* rightType
    - notice 消息
* middleType
    - search 搜索框
* onLeftJump 默认返回上一页
* onRightJump 右侧图标点击操作
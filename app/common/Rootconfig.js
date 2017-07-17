const RootConfig = {
    'nav': [
        {
            TabImage: require("../../res/tab/ic_tab_home.png"),
            TabText: "首页",
            SelectTabImage: require("../../res/tab/ic_tab_home_press.png"),
        },
        {
            TabImage: require("../../res/tab/ic_tab_classify.png"),
            TabText: "分类",
            SelectTabImage: require("../../res/tab/ic_tab_classify_press.png"),
        },
        {
            TabImage: require("../../res/tab/ic_tab_home.png"),
            TabText: "推荐",
            SelectTabImage: require("../../res/tab/ic_tab_home_press.png"),
        },
        {
            TabImage: require("../../res/tab/ic_tab_cart.png"),
            TabText: "购物车",
            SelectTabImage: require("../../res/tab/ic_tab_cart_press.png"),
        },
        {
            TabImage: require("../../res/tab/ic_tab_my.png"),
            TabText: "我的",
            SelectTabImage: require("../../res/tab/ic_tab_my_press.png"),
        }
    ],
    'cart': {
        'select': require('../../res/cartSelect.png'),
        'selected': require('../../res/cartSelected.png'),
    },
};

export default RootConfig;
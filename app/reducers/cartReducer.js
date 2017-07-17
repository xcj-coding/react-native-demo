import {CART} from '../actions/actionTypes';

const cart = [
    {
        id: 1,
        imageUri: "http://m.360buyimg.com/mobilecms/s357x357_jfs/t3046/24/1238189721/263988/a3d4f2f1/57c8d880Nd90eb247.jpg!q50.jpg",
        price: "2299.00",
        title: "荣耀8 4GB+32GB 全网通4G手机 魅海蓝",
        summary: "全网通 4G手机",
        num: 1,
        selected: true,
    },
    {
        id: 2,
        imageUri: "http://m.360buyimg.com/mobilecms/s357x357_jfs/t3064/188/1693292264/115570/e891640b/57d11bfaN2e8acade.jpg!q50.jpg",
        price: "7188.00",
        title: "Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机",
        summary: "Apple iPhone 7 Plus",
        num: 1,
        selected: true,
    },
    {
        id: 3,
        imageUri: "http://m.360buyimg.com/mobilecms/s357x357_jfs/t3334/118/950912833/79547/3301c78b/58194797N47934bdf.jpg!q50.jpg",
        price: "2799.00",
        title: " OPPO R9s 全网通4G+64G 双卡双待手机 黑色",
        summary: "全网通",
        num: 1,
        selected: true,
    },
];

// 查找
const find = action => item => item.id === action.id;
// 过滤
const filter = action => item => item.id !== action.id;
// 排序
const sort = (a, b) => a.id - b.id;

const CartRD = (state = cart, action) => {
    switch (action.type) {
        // 购物车商品增加
        case CART.CARTGOODSADD:
            return [
                ...state,
                action.data,
            ];

        // 购物车商品删除
        case CART.CARTGOODSREMOVE:
            return state.filter(filter(action));

        // 购物车商品被选中
        case CART.CARTGOODSSELECT:
            return [
                ...state.filter(filter(action)),
                {
                    ...state.find(find(action)),
                    selected: action.selected,
                }
            ].sort(sort);

        // 购物车商品被全选
        case CART.CARTGOODSSELECTALL:
            return state.map((item) => {
                return {
                    ...item,
                    selected: action.selected,
                }
            });

        // 购物车商品数量改变
        case CART.CARTGOODSNUMCHANGE:
            return [
                ...state.filter(filter(action)),
                {
                    ...state.find(find(action)),
                    num: action.num,
                }
            ].sort(sort);

        default:
            return state;
    }
};

export default CartRD;

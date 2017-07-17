import {CART} from './actionTypes';

// 商品加入购物车
export const cartAdd = (data) => {
    return {
        type: CART.CARTGOODSADD,
        data,
    }
};

// 商品从购物车中移除
export const cartRemove = (id) => {
    return {
        type: CART.CARTGOODSREMOVE,
        id,
    }
};

// 购物车中商品被选中
export const cartSelect = (id, selected) => {
    return {
        type: CART.CARTGOODSSELECT,
        id,
        selected,
    }
};

// 购物车中商品被全选
export const cartSelectAll = (selected) => {
    return {
        type: CART.CARTGOODSSELECTALL,
        selected,
    }
};

// 购物车中商品数量改变
export const cartGoodsNumChg = (id, num) => {
    return {
        type: CART.CARTGOODSNUMCHANGE,
        id,
        num,
    }
};

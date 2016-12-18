import { fromJS } from 'immutable';

const DYInitState = fromJS({
    test: '我是购物车的默认值',
});

const CartRD = (state = DYInitState, action) => {
    switch (action.type) {
        case "cartTestAction":
            return state.mergeIn(['test'], action.data);
        default:
            return state;
    }
}

export default CartRD;

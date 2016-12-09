import { fromJS } from 'immutable';

const DYInitState = fromJS({
    test: '我是购物车的默认值',
});

const CartRD = (state = DYInitState, action) => {
    switch (action.type) {
        case "cartTestAction":
            console.log('cartTestAction');
            console.log('oldstate:' + state);
            console.log(action.data);
            state = state.mergeIn(['test'], action.data);
            console.log('newstate:' + state);
            return state;
        default:
            return state;
    }
}

export default CartRD;

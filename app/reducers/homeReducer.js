import { fromJS } from 'immutable';

const DYInitState = fromJS({
    test: '我是首页的默认值'
});

const HomeRD = (state = DYInitState, action) => {
    switch (action.type) {
        case "homeTestAction":
            return state.mergeIn(['test'], action.data);
        default:
            return state;
    }
}

export default HomeRD;

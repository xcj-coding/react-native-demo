import { fromJS } from 'immutable';

const DYInitState = fromJS({
    test: '我是个人中心的默认值',
});

const PersonalRD = (state = DYInitState, action) => {
    switch (action.type) {
        case "personalTestAction":
            return state.mergeIn(['test'], action.data);
        default:
            return state;
    }
}

export default PersonalRD;

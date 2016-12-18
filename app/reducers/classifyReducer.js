import { fromJS } from 'immutable';

const DYInitState = fromJS({
    test: '我是分类的默认值',
    // initTypeId: 1
});

const ClassifyRD = (state = DYInitState, action) => {
    switch (action.type) {
        case "classifyTestAction":
            return state.mergeIn(['test'], action.data);
        // case "classifyChangeTypeId": 
            // return state.mergeIn(['initTypeId'], action.data);
        default:
            return state;
    }
}

export default ClassifyRD;

import Immutable,{List,Map,fromJS} from 'immutable';

const DYInitState = fromJS({
    test: '我是分类的默认值',
});

const ClassifyRD = (state = DYInitState,action)=>{
    switch(action.type){
        case "classifyTestAction" :
            console.log('classifyTestAction');
            console.log('oldstate:' + state);
            console.log(action.data);
            state = state.mergeIn(['test'],action.data);
            console.log('newstate:' + state);
            return state;
        default : 
            return state;
    }
}

export default ClassifyRD;

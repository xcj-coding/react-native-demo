import Immutable,{List,Map,fromJS} from 'immutable';

const DYInitState = fromJS({
    test: '我是个人中心的默认值',
});

const PersonalRD = (state = DYInitState,action)=>{
    switch(action.type){
        case "personalTestAction" :
            console.log('personalTestAction');
            console.log('oldstate:' + state);
            console.log(action.data);
            state = state.mergeIn(['test'],action.data);
            console.log('newstate:' + state);
            return state;
        default : 
            return state;
    }
}

export default PersonalRD;

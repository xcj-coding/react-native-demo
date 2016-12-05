import Immutable,{List,Map,fromJS} from 'immutable';

const DYInitState = fromJS({
    test: '我是首页的默认值'
});

const HomeRD = (state = DYInitState,action)=>{
    switch(action.type){
        case "homeTestAction" :
            console.log('homeTestAction');
            console.log('oldstate:' + state);
            console.log(action.data);
            state = state.mergeIn(['test'],action.data);
            console.log('newstate:' + state);
            return state;
        default : 
            return state;
    }
}

export default HomeRD;

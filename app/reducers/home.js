import Immutable,{List,Map,fromJS} from 'immutable';

const MgInitState = fromJS({
    printHello: '',
    // XXX: false,
    YYY: true,
});

const Home = (state = MgInitState,action)=>{
    switch(action.type){
        case "printHello" :
            console.log(123);
            console.log(state);
            console.log(action.data);
            state = state.mergeIn(['printHello'],action.data);
            return state;
        case "YYY" :
            state = state.mergeIn(['YYY'],action.data);
            return state;
        default : 
            return state;
    }
}

export default Home;

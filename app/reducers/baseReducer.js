import Immutable,{List,Map,fromJS} from 'immutable';

const DYInitState = fromJS({
    LOGINSTATE: false,
    LOADINGTIP: true,
    AJAXFAILED: false,
    USERINFO: {},
    TICKET: {},
    CRUISE: {},
    HOTEL: {},
    FLIGHT: {},
    HOLIDAY: {},
});

const BaseRD = (state = DYInitState,action)=>{
    switch(action.type){
        case "LOGINSTATE" : // 登录状态
            state = state.mergeIn(['LOGINSTATE'],action.data);
            return state;
        case "LOADINGTIP" : // loading状态
            state = state.mergeIn(['LOADINGTIP'],action.data);
            return state;
        case "AJAXFAILED" : // 请求失败
            state = state.mergeIn(['AJAXFAILED'],action.data);
            return state;
        default : 
            return state;
    }
}

export default BaseRD;
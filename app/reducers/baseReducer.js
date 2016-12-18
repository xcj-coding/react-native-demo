import { fromJS } from 'immutable';

const DYInitState = fromJS({
    LOGINSTATE: false,
    LOADINGTIP: true,
    AJAXFAILED: false,
    USERINFO: {}
});

const BaseRD = (state = DYInitState, action) => {
    switch (action.type) {
        case "LOGINSTATE": // 登录状态
            return state.mergeIn(['LOGINSTATE'], action.data);
        case "LOADINGTIP": // loading状态
            return state.mergeIn(['LOADINGTIP'], action.data);
        case "AJAXFAILED": // 请求失败
            return state.mergeIn(['AJAXFAILED'], action.data);
        default:
            return state;
    }
}

export default BaseRD;
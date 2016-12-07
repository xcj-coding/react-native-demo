/**
 * 全局变量
 * 
 */
import {Dimensions} from 'react-native';

const DYGlobal = {}

DYGlobal.test = 'test';

/**
 * 获取屏幕高宽
 */
DYGlobal.window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};

/**
 * fetch封装，只适用于移动端项目
 * @param {[type]} obj 对象 url,type,dataType,data,success,error
 */
DYGlobal.getDataFromAPI = (obj) => {
    let abj = {};

    // 测试地址
    abj.url = 'https://www.baidu.com/' + obj.url;

    abj.type = obj.type || 'POST';
    abj.dataType = obj.type || 'json';
    abj.data = obj.data;
    abj.success = obj.success || ((data)=>{console.log('成功回流: ' + data)});
    abj.error = obj.error || ((data)=>{console.log('失败回流: ' + data)});
    abj.fetchHeader = {};

    if(abj.dataType === 'formData'){
        // formData

    }else if(abj.dataType === 'json'){
        // json

    }else{
        // 图片

    }

    fetch(abj.url,fetchHeader).then(
        abj.success
    ).catch(
        abj.error
    )

}




module.exports = DYGlobal;

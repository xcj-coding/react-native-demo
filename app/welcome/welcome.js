import React, { Component } from 'react';
import {Dimensions,Image,InteractionManager,View} from 'react-native';

import AppMain from '../views/appMain';

let {height, width} = Dimensions.get('window');

class Welcome extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: AppMain,
                    name: 'AppMain'
                });
            });
        }, 2000);
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('../../res/welcome.jpg')}
                />
            </View>
        );
    }
}

export default Welcome;
import React, { Component } from 'react';
import { Dimensions, Image, InteractionManager, View } from 'react-native';

import DYGlobal from '../global/DYGlobal';

import AppMain from '../views/appMain';

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
            <View style={{ flex: 1 }}>
                <Image
                    style={{ flex: 1, width: DYGlobal.window.width, height: DYGlobal.window.height }}
                    source={require('../../res/welcome.jpg')}
                    />
            </View>
        );
    }
}

export default Welcome;
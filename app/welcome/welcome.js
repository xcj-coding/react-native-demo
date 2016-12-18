import { Component } from 'react';
import { Dimensions, Image, InteractionManager, View ,Animated} from 'react-native';

import DYcommon from '../common/DYcommon';

import AppMain from '../views/appMain';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }
    componentDidMount() {
        const { routes } = this.context;
        Animated.timing(
            this.state.bounceValue, { toValue: 1.2, duration: 1000 }
        ).start();
        this.timer = setTimeout(() => {
            routes.tabbar();
        }, 1000);
    }
    componentWillUnmount() {
        clearTimeout(this.timer);
    }
    render() {
        return (
            <Animated.Image
                style={{
                    width: DYcommon.window.width,
                    height: DYcommon.window.height,
                    transform: [{ scale: this.state.bounceValue }]
                }}
                source={require('../../res/welcome.jpg')}
                />
        );
    }
}

export default Welcome;
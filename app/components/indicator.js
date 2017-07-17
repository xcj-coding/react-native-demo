import React, {Component} from 'react';
import {
    StatusBar,
    StyleSheet,
    Image,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

class Indicator extends Component {
    constructor(props){
        super(props);
    }
    render(){
        if (!this.props.show) {
            return null;
        }
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 20,
                    height: 20,
                    flex: 1,
                    width: WINDOW_WIDTH,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <View
                    style={{
                        width: 60,
                        height: 20,
                        backgroundColor: 'rgba(0, 0, 0, .4)',
                        borderRadius: 80,
                    }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: 'white',
                            flex: 1,
                        }}
                        >
                            {this.props.indexOffset}/{this.props.counts}
                    </Text>
                </View>
            </View>
        );
    }
}

export default Indicator;

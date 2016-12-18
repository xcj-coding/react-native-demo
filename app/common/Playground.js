/**
 * @author huangliang@douyu.tv
 * @description 用于多状态ui组件调试
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';
// import MenuBar from './tabs/Profile/MenuBar';

class Playground extends Component{

    constructor() {
        super();

        this.state = {
            content: []
        };

        const content = [];
        const define = (name, render) => {
            content.push(<Example key={name} render={render} />);
        };

        Example.__cards__(define);

        this.state = {content};
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.state.content}
            </View>
        );
    }
}

class Example extends Component {
    constructor() {
        super();
        this.state = {
            inner: null
        };
    }
    render() {
        const content = this.props.render(this.state.inner, (inner) => {this.setState(inner); });
        return (
            <View>
                {content}
            </View>
        );
    }
}

module.exports = Playground;

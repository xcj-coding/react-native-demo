# App theme 切换

## 目前采用的方案
* /app/theme/index.js 导出目前采用的theme
* 主题包含各组件的配色以及字体
* /app/theme/目录下存放各主题文件

## 可以实现的功能
* 节假日、活动促销服务器端推送主题
* 用户切换主题 -- 将当前theme放入redux中管理，theme发生变化时，App的theme才会生效

```javascrpit
function themeReducer(state, action){
    state = state || defaultTheme;
    if (action.type == 'CHANGE_THEME'){
        return action.newTheme;
    }
    return state;
}
```

```javascrpit
class Title extends React.Component {
    render(){
        var {theme, children} = this.props;
        return (
            <Text style={theme && theme.title}>
                {children}
            </Text>
        )
    }
}

class Content extends React.Component {
    render(){
        var {theme, children} = this.props;
        return (
            <Text style={theme && theme.content}>
                {children}
            </Text>
        )
    }
}

class Article extends React.Component {  
    render(){
        return (
            var {theme} = this.props;
            <View style={[style.container, theme && theme.container]}>
                <Title theme={theme}>
                    {this.props.title}
                </Title>
                <Content theme={theme}>
                    {this.props.content}
                </Content>
            </View>
        );
    }
};

const mapState2Props = (state) => {
  return {
    theme: state.theme
  }
};

export connect(mapState2Props)(Article);
```

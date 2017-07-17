# react-native-router-flux

### Usage

#### 1.顶层注册路由
```javascript
import {Actions, Scene, Router} from 'react-native-router-flux';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key="login" component={Login} title="Login"/>
                    <Scene key="register" component={Register} title="Register"/>
                    <Scene key="home" component={Home}/>
                </Scene>
            </Router>
        );
    }
}
```
#### 2.在其他页面跳转
* `import {Actions} from 'react-native-router-flux'`
* `Actions.ACTION_NAME(PARAMS)` ACTION_NAME为scene的key值
* `Actions.pop()` 原路由返回，有些参数不生效如rest,replace
* `Actions.refresh(PARAMS)` 刷新当前页面

### 3.详细api
* `https://github.com/lynndylanhurley/react-native-router-flux#reduxflux`


import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator,
  TouchableHighlight,
} from 'react-native';
const NotFind=()=>(
  <View><Text>404</Text></View>
)
class Main extends Component {
  routes(name){
    const Route={
      home:require('./page/home.js').default,
      // log:require('./page/log.js').default,
      test:require('./page/test.js').default,
    }
    const Com=Route[name]
    return Com?Com:NotFind;
  }
  renderScene=(route, navigator)=>{
    const Com = this.routes(route.name);
    const props={...this.props,...route.props};
    return <Com {...props} navigator={navigator}/>
  }
  render() {
    return <Navigator
            initialRoute={{name: 'home'}}
            renderScene={this.renderScene}
            navigationBar={
               <Navigator.NavigationBar
                 routeMapper={{
                   LeftButton: (route, navigator, index, navState) =>
                    {
                      return navigator.getCurrentRoutes().length>1?
                      (<Img class="icon_back" onPress={e=>navigator.pop()} src={require('./images/icon_back.png')}/>)
                      :false;
                    },
                   RightButton: (route, navigator, index, navState) =>
                     { return route.RightButton?(<route.RightButton/>):false },
                   Title: (route, navigator, index, navState) =>
                     { return (<Text style={CSS.nav_title}>{route.title || '我的荣誉'}</Text>); },
                 }}
                 style={[CSS.nav]}
               />
            }
          />
  }
}
export default Main

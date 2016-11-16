// global.my_rem = 750
import React, { Component } from 'react';
global.Component = Component
global.React = React

import CSS from './css/common.rn';
global.CSS = CSS
import * as Util from './js/Util.js'
global.u=global.Util=Util;

import MyRedux from './js/MyRedux.js'

import reducer from './reducer.js'
Util.entends(global,new MyRedux(reducer));

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ListView,
  Animated,
  Easing,
  Platform
} from 'react-native';
global.ListView=ListView
global.TouchableOpacity = TouchableOpacity
global.Animated = Animated
global.Easing = Easing
global.Platform = Platform
global.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})


class Div extends Component{
  render(){
    const {children,onPress,onLayout,...props}=this.props
    return (
      onPress?
      <TouchableOpacity onPress={onPress} onLayout={onLayout}>
        <View {...props}>{children}</View>
      </TouchableOpacity>
      :<View {...props}>{children}</View>
    )
  }
}
global.Div=Div
class P extends Component{
  render(){
    const {children,...props}=this.props
    return (
      <Text {...props}>{children}</Text>
    )
  }
}
global.P=P

class Img extends Component{
  render(){
    const {onPress,src,...props}=this.props
    let source
    if(typeof(src)=='string'){
      source={
        uri:src
      }
    }else{
      source=src
    }
    return (
      onPress?
      <TouchableOpacity onPress={onPress}>
        <Image {...props} source={source}  />
      </TouchableOpacity>
      :<Image {...props} source={source}  />

    )
  }
}
global.Img=Img

import Main from './Router.js'
export default Main

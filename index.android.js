import React, { Component } from 'react'
import {
  AppRegistry,
  Text
} from 'react-native';
import Main from './ReactComponent/src/main.js'

class myhonor extends Component {
  render() {
    return (
      <Main></Main>
    );
  }
}
AppRegistry.registerComponent('honer', () => myhonor);

import {
  View,
} from 'react-native';

@connect()
class Div extends Component{
  render(){
    return (
      <View {...this.props}>{this.props.children}</View>
    )
  }
}
export default Div;

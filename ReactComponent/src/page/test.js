class Com extends Component{
  render(){
    return (
      <Div style={[CSS.container,{backgroundColor:'#fff',height:700}]}>
        <Div style={{marginTop:20}} onPress={e=>{
          let i=getState().log.i
          dispatch({i:++i},'log')
          this.props.navigator.push({name:'test',title:'测试第'+i+'层'})
        }}>
          <P>跳转到下一页</P>
        </Div>
        <Div style={{marginTop:20}} onPress={e=>{
          this.props.navigator.resetTo({name:'home',title:'我的荣誉'})
        }}>
          <P>回首页</P>
        </Div>
      </Div>
    )
  }
}
export default Com;

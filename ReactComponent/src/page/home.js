import styles from '../css/page/home.rn.js'
u.entends(CSS,styles)
@connect(({home})=>({home}))
// console.log(ds.getRowCount());
class Com extends Component{
  constructor() {
    super();
    this.i=0;
    this.x_arr=new Array(4);
  }
  scale_rang={inputRange: [0,1],outputRange: [1,1.4]}
  opacity_rang={inputRange: [0,1],outputRange: [1,0]}
  state={
    x:new Animated.Value(-40),
    scale:new Animated.Value(0),
    scale1:new Animated.Value(0),
  }
  ani(scale){
    scale.setValue(0);
    Animated.timing(
       scale,
       {toValue:1,duration:2000,easing:Easing.linear}
     ).start(()=>this.ani(scale));
  }
  componentDidMount() {
    this.ani(this.state.scale)
    setTimeout(()=>this.ani(this.state.scale1),1000)
    setTimeout(() => {
      Animated.spring(
         this.state.x,
         {toValue: this.x_arr[0]+5},
       ).start()
    }, 500);
  }
  go=()=>{
    let i=getState().log.i
    dispatch({i:++i},'log')
    this.props.navigator.push({name:'test',title:'测试第'+i+'层'})
  }
  render(){
    return (
      <Div class="container">
        <Div class="header">
          <Img class="badge" src={require('../images/bs1.png')} />
          <P class="name">中级学霸11  当前成长值 : 330</P>
          <P class="desc">已超过40%的同学</P>
          <Div class="progress">
            <Img class="dashed" src={require('../images/das.png')} />
            <Animated.View class="avater"  style={{left:this.state.x}}>
               <Img class="avater" src={require('../images/avater.png')}/>
            </Animated.View>
            <Animated.View class="bw" style={{left:this.state.x,opacity:this.state.scale.interpolate(this.opacity_rang),transform:[{scale:this.state.scale.interpolate(this.scale_rang)}]}}>
            </Animated.View>
            <Animated.View class="bw" style={{left:this.state.x,opacity:this.state.scale1.interpolate(this.opacity_rang),transform:[{scale:this.state.scale1.interpolate(this.scale_rang)}]}}>
            </Animated.View>

            {this.props.home.level.map((v,k)=>(
                <Div class="p_div" key={k} onPress={e=> Animated.spring(
                   this.state.x,
                   {toValue: this.x_arr[k]+5},
                 ).start()} onLayout={e=>this.x_arr[k]=e.nativeEvent.layout.x}>
                  <Img class="p_img" src={v.img} />
                  <P class="p_text">{v.name}</P>
                </Div>
            ))}
          </Div>
          <Div class="tips">
            <P class="tips_p">距离升级高级学霸还差170成长值</P>
          </Div>
        </Div>
        <Div class="label">
          <P class="p">高级学霸特权<P class="o">（3项）</P></P>
          <P class="right">特权会不定期调整</P>
        </Div>
        <Div class="lists">
          <ListView
            dataSource={ds.cloneWithRows(this.props.home.arr)}
            renderRow={(v,s,k) => (
              <Div class='item' style={u.cn({item_nob:k==this.props.home.arr.length-1})} onPress={this.go}>
                <Img class="img"  src={require('../images/img1.png')}/>
                <Div>
                  <P class="l_t">积分抽奖{k}</P>
                  <P class="l_d">在积分商城签到即可得积分，还有免积分抽奖机会</P>
                </Div>
                <Img class="icon_right"  src={require('../images/icon_right.png')}/>
              </Div>
            )}
          />
        </Div>
      </Div>
    )
  }
}
export default Com;

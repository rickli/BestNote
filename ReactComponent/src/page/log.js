import '../css/page/log.less';
@connect(({log})=>({log}))
class Com extends Component{
  componentDidMount() {
    u.$post('/getGrowthLog',{token:this.props.token}).success(json=>{
      dispatch({list:json.list},'log')
    })
  }
  render({log}){
    return (
      <div  class="container" style="background-color:#fff">
        <div id="log">
          <div class="bg_line"></div>
          <ul class="lists">
            {log.list.map((v,k) => (
              <li class="item" key={k}>
                <div class="num left">+ {v.growth}</div>
                <div class="line left"></div>
                <div class="info left">
                  <p class="name">{v.description}</p>
                  <p class="time">{v.createTime}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Com;

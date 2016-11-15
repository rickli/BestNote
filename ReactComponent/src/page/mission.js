import '../css/page/mission.less';
@connect(({home})=>({home}))
class Com extends Component{
  componentDidMount() {
    dispatch({},'mission')
  }
  getLevel=({levels,current})=>{
    var p = 1
    levels.forEach((v,k)=>
        current.requirement>v.requirement && p++
    )
    return p
  }
  goAction=v=>e=>{
    switch (v.act) {
      case 'scheme':
        jsbridge.callNative(v.scheme)
        return ;
      case 'url':
        location.href=v.scheme
        return ;
    }
  }
  render({home}){
    if(!home.init){
      history.back()
      return
    }
    const p = this.getLevel(home.data)
    const pw_level=home.data.levels[p]
    const p_level=home.data.current
    return (
      <div  class="container" style="background-color:#F7F9FA">
        <div id="mission">
          <div class="header">
            <div class="badge">
              <div class={`s bs${p} center`}></div>
            </div>
            <p class="info">
              当前成长值 : <span class="b">{p_level.requirement}</span>
              <a href="#/help" class="help"></a>
            </p>
            <p class="desc">{p==4?'已在?????':`距离升级${pw_level.name}还差${pw_level.requirement-p_level.requirement}成长值`}</p>
            <a href="#/log" class="log"></a>
          </div>

          <p class="label">基础任务</p>
          <ul class="lists">
            <li class="item">
              <p class="name">首次注册</p>
              <p class="info">+5</p>
              <div class="action done" content=""></div>
            </li>
            {home.base_arr.map((v,k) => (
              <li class="item" key={k}>
                <p class="name">{v.name}</p>
                <p class="info">+{v.growth}/次，(每日限{v.alloc}次)</p>
                <div class={u.cn("action",{done:(v.status==1)})} content={v.btn} onClick={this.goAction(v)}></div>
              </li>
            ))}
          </ul>

          <p class="label">每日任务</p>
          <ul class="lists">
            {home.daily_arr.map((v,k) => (
              <li class="item" key={k}>
                <p class="name">{v.name}</p>
                <p class="info">+{v.growth}/次，(每日限{v.alloc}次)</p>
                <div class={u.cn("action",{done:(v.status==1)})} content={v.btn} onClick={this.goAction(v)}></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Com;

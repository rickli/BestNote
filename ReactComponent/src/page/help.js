import '../css/page/help.less';
@connect()
class Com extends Component{
  render(){
    return (
      <div  class="container" style="background-color:#fff">
        <div id="help">
          <p class="title t_center center">成长值说明</p>
          <div class="content center">
            成长值是学霸君APP用户通过注册、拍照搜题、题库练习、签到、完善个人资料、查看作文、古文，邀请、答疑等操作所获得的成长奖励，累计的成长值总额决定用户的级别及荣誉称号，每日凌晨8点后根据截止到前一天累计的成长值调整用户的级别及荣誉称号、排名情况，不同级别的荣誉称号所需达到的成长值会3个月调整1次。
          </div>
          <p class="title t_center center">荣誉说明</p>
          <div class="content center ">
            不同级别的荣誉称号会拥有不同的特权，为满足更多用户的需求，特权也会不定期调整，为不同用户提供多样的特权。
          </div>
        </div>
      </div>
    )
  }
}
export default Com;

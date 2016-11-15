export const reducer={
  home(state = {
      init:false,
      pw:0,
      data:{
        current:{},
        levels:[],
        privileges:{}
      },
      base_arr:[],
      daily_arr:[],
      arr:Array.from({length:10000}),
      level:[
        {name:'初级学霸',img:require('./images/s1.png')},
        {name:'中级学霸',img:require('./images/s2.png')},
        {name:'高级学霸',img:require('./images/s3.png')},
        {name:'超级学霸',img:require('./images/s4.png')},
      ]
    }, {type,...newState}) {
    if(type=='home'){
      return {...state,...newState};
    }else if (type=='mission') {
      u.$post('/getGrowthList',{token:u.route_param().token}).success(json=>{
        var base_arr=[],daily_arr=[]
        json.list.forEach(v=>{
          if(v.scope=='global'){
            base_arr.push(v)
          }else{
            daily_arr.push(v)
          }
        })
        dispatch({base_arr:base_arr,daily_arr:daily_arr},'home')
      })
    }
    return state;
  },
  log(state = {
      list:[],
      i:0
    }, {type,...newState}) {
    if(type=='log'){
      return {...state,...newState};
    }
    return state;
  },
  A(state = {
      data:1
    }, {type,...newState}) {
    if(type=='A'){
      return {...state,...newState};
    }else if(type=='ajax'){
      alert(type);
      setTimeout(() => {
        dispatch({data:'ajax'},'A')
      }, 1);
    }
    return state;
  },
  B(state = {
      data:2
    }, {type,...newState}) {
    if(type=='B'){
      return {...state,...newState};
    }
    return state;
  }
}
module.exports = reducer;

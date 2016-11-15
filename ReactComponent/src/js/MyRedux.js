import { Component ,createElement} from 'react';
export default class MyRedux {
  constructor(reducer){
    this._(reducer);
    this.dispatch();
  }
  _(reducer){
    this._.state={};
    this._.reducer=reducer;
    this._.listener_arr=[];
  }
  dispatch=(action={},type=false)=>{
    if(type){
      action.type=type;
    }
    const {reducer}=this._;
    for (var variable in reducer) {
      if (reducer.hasOwnProperty(variable)) {
        this._.state[variable]=reducer[variable](this._.state[variable],action)
      }
    }
    if(this._.listener_arr.length>0){
      this._.listener_arr.reverse().forEach(v=>{v()})
    }
    return this;
  }
  subscribe(listener){
    if(typeof listener!=='function'){
      return false;
    }
    this._.listener_arr.push(listener);
    return ()=>{
      if(this._.listener_arr.length<=0){
        return
      }
      const index=this._.listener_arr.indexOf(listener);
      this._.listener_arr.splice(index, 1);
    }
  }
  getState=()=>{
    return this._.state;
  }
  connect=(mapReducer=s=>{})=>(component)=>{
    const that=this;
    return class Wrap extends Component{
      constructor(props) {
        super();
        const state={...mapReducer(that.getState())}
        this.state=state;
      }
      componentDidMount(){
        this.unsubscribe=that.subscribe(()=>{
          this.setState({...mapReducer(that.getState())});
        });
      }
      componentWillUnmount() {
        this.unsubscribe()
      }
      shallowEqual(objA, objB) {
        if (objA === objB) {
          return true
        }
        const keysA = Object.keys(objA)
        const keysB = Object.keys(objB)

        if (keysA.length !== keysB.length) {
          return false
        }
        const hasOwn = Object.prototype.hasOwnProperty
        for (let i = 0; i < keysA.length; i++) {
          if (!hasOwn.call(objB, keysA[i]) ||
              objA[keysA[i]] !== objB[keysA[i]]) {
            return false
          }
        }
        return true
      }
      shouldComponentUpdate(props,state){
        return (!this.shallowEqual(state, this.state) || !this.shallowEqual(props, this.props));
      }
      render() {
        return (
          createElement(component,{...this.state,...this.props})
        )
      }
    }
  }
}
module.exports = MyRedux;

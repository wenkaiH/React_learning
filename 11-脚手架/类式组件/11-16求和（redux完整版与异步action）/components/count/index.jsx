import React, { Component } from 'react'
import store from '../../redux/store'
import { AddAction,DelAction,AddAsyncAction} from '../../redux/count_action'

export default class Count extends Component {
  // state={
  //   count:0
  // }

  // componentDidMount(){
  //   store.subscribe(()=>{
  //       this.setState({})
  //       // 调用setState，触发render()重新渲染，从而重新执行getState，调用仓库中的count
  //   })
  // }
  //  缺点：这种办法在每个组件要使用store时都得书写
  //  改良：在入口index.js中书写，监听整个App组件更新变化

  Add=()=>{
    const {value}=this.selectOption
    // this.setState({count:this.state.count+Number(value)})
    // store.dispatch({type:'Add',data:value*1})
    store.dispatch(AddAction(Number(value)))
  }
  Del=()=>{
    const {value}=this.selectOption
    // this.setState({count:this.state.count-value})
    // store.dispatch({type:'Del',data:value*1})
    store.dispatch(DelAction(value*1))
  }
  oddsAdd=()=>{
    const {value}=this.selectOption
    // this.state.count%2!==0?this.setState({count:this.state.count+Number(value)}):this.setState({count:this.state.count})
    const count=store.getState()
    console.log(count)
    if(count%2!==0){
      // store.dispatch({type:'Add',data:Number(value)})
      store.dispatch(AddAction(Number(value)))
    }
  }
  syncAdd=()=>{
    const {value}=this.selectOption
    // setTimeout(()=>{
    //   // this.setState({count:this.state.count+value*1})
    //   store.dispatch({type:'Add',data:Number(value)})
    // },500)
    store.dispatch(AddAsyncAction(Number(value),500))
  }
  render() {
    return (
      <div>
        <h1>当前求和总数为：{store.getState()}</h1>
        <select ref={e=>this.selectOption=e} style={{margin:'10px',fontSize:'20px'}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button style={{margin:'5px'}} onClick={this.Add}>+</button>
        <button style={{margin:'5px'}} onClick={this.Del}>-</button>
        <button style={{margin:'5px'}} onClick={this.oddsAdd}>当前和为奇数和+</button>
        <button style={{margin:'5px'}} onClick={this.syncAdd}>异步加</button>
      </div>
    )
  }
}

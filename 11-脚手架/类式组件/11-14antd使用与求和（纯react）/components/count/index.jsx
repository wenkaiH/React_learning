import React, { Component } from 'react'

export default class Count extends Component {
  state={
    count:0
  }
  Add=()=>{
    const {value}=this.selectOption
    this.setState({count:this.state.count+Number(value)})
  }
  Del=()=>{
    const {value}=this.selectOption
    this.setState({count:this.state.count-value})
  }
  oddsAdd=()=>{
    const {value}=this.selectOption
    this.state.count%2!==0?this.setState({count:this.state.count+Number(value)}):this.setState({count:this.state.count})
  }
  syncAdd=()=>{
    const {value}=this.selectOption
    setTimeout(()=>{
    this.setState({count:this.state.count+value*1})
    },500)
  }
  render() {
    return (
      <div>
        <h1>当前求和总数为：{this.state.count}</h1>
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

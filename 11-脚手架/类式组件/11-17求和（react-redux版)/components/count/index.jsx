import React, { Component } from 'react'

export default class Count extends Component {

  Add=()=>{
    const {value}=this.selectOption
    this.props.add(value*1)
  }
  Del=()=>{
    const {value}=this.selectOption
    this.props.del(value*1)
  }
  oddsAdd=()=>{
    const {value}=this.selectOption
    if(this.props.count%2!==0){
      this.props.add(value*1)
    }
  }
  syncAdd=()=>{
    const {value}=this.selectOption
    this.props.addAsycn(Number(value))
  }
  render() {
    return (
      <div>
        <h1>当前求和总数为：{this.props.conut}</h1>
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

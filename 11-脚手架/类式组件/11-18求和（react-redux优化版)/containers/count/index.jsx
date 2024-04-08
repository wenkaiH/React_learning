// 引入connect连接两者
import {connect} from 'react-redux'

import { AddAction,DelAction,AddAsyncAction } from '../../redux/count_action'

import React, { Component } from 'react'

class Count extends Component {

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

// 暴露Count的容器组件  (参照React_image)
export default connect(
    state => ({count:state}),
    {
        add:AddAction,
        del:DelAction,
        addAsycn:AddAsyncAction
    })
(Count)

// 1、将容器组件和UI组件合并为一个文件夹
// 2、不再手动设置subscribe监听redux数据的变化，react-redux自动监听
// 3、使用Provide自动注入需要使用redux的组件
// 4、简写connect传入的两个函数（数据状态、操作数据状态）方法

import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import Detail from './detail'
export default class message extends Component {
    state={
      mes:[{id:'1',title:'消息1',content:'你好1'},
      {id:'2',title:'消息2',content:'你好2'},
      {id:'3',title:'消息3',content:'你好3'}]
    }
    push=(id,title)=>{
      console.log(this.props)
      //push跳转+携带params参数
      this.props.history.push(`/home/message/detail/${id}/${title}`)
      //push跳转+携带search参数
      // this.props.history.push(`/home/message/detail/?id=${id}&title=${title}`)
      //push跳转+携带state参数
      // this.props.history.push('/home/message/detail',{id,title})
    }
    replace=(id,title)=>{
      //replace跳转+携带params参数
      this.props.history.replace(`/home/message/detail/${id}/${title}`)
      //replace跳转+携带search参数
      // this.props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)
      //replace跳转+携带state参数
      // this.props.history.push('/home/message/detail',{id,title})
    }
    Back=()=>{
      this.props.history.goBack()
    }
    Forward=()=>{
      this.props.history.goForward()
    }
    render() {
        const {mes}=this.state
        return (
            <div>
                <ul>
                    {
                      mes.map((item)=>{
                        return(
                            <li key={item.id} style={{marginTop:"15px",fontSize:'18px'}}>

                              {/* 跳转路由并携带params参数 */}
                              <Link to={`/home/message/detail/${item.id}/${item.title}`} >{item.title}</Link>

                              {/* 下方按钮为：编程式路由导航实现路由跳转*/}
                              &nbsp; &nbsp;<button onClick={()=>{this.push(item.id,item.title)}}>push查看</button>
                              &nbsp; &nbsp;<button onClick={()=>{this.replace(item.id,item.title)}}>replace查看</button>

                              {/* 跳转路由并携带search参数 */}
                              {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                              {/* 跳转路由并携带search参数 */}
                              {/* <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link> */}
                              
                            </li>
                        )
                      })
                    }
                </ul>
                <hr />

                {/* 声明接受params参数：使用 :x 占位 */}
                <Route path='/home/message/detail/:id/:title' component={Detail}></Route>

                {/* 声明接受search参数： 无需声明正常接收*/}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}

                {/* 声明接受state参数： 无需声明正常接收*/}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}

                <button onClick={this.Back} style={{marginRight:'15px'}}>goBack</button>
                <button onClick={this.Forward}>goForward</button>
                
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'
import Detail from './detail'
export default class message extends Component {
    state={
      mes:[{id:'1',title:'消息1',content:'你好1'},
      {id:'2',title:'消息2',content:'你好2'},
      {id:'3',title:'消息3',content:'你好3'}]
    }
    render() {
        const {mes}=this.state
        return (
            <div>
                <ul>
                    {
                      mes.map((item)=>{
                        return(
                            <li key={item.id}>

                              {/* 跳转路由并携带params参数 */}
                              {/* <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link> */}

                              {/* 跳转路由并携带search参数 */}
                              {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`}>{item.title}</Link> */}

                              {/* 跳转路由并携带search参数 */}
                              <Link to={{pathname:'/home/message/detail',state:{id:item.id,title:item.title}}}>{item.title}</Link>
                              
                            </li>
                        )
                      })
                    }
                </ul>
                <hr />

                {/* 声明接受params参数：使用 :x 占位 */}
                {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}

                {/* 声明接受search参数： 无需声明正常接收*/}
                {/* <Route path='/home/message/detail' component={Detail}></Route> */}

                {/* 声明接受state参数： 无需声明正常接收*/}
                <Route path='/home/message/detail' component={Detail}></Route>
                
            </div>
        )
    }
}

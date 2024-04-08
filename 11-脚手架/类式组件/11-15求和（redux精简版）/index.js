//引入核心库
import React from 'react'
import ReactDOM from 'react-dom'
// 引入路由
import {BrowserRouter} from 'react-router-dom'
//引入组件
import App from './App.jsx'
import store from './redux/store.js'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root")
)
//  监听Redux，里面的数据状态一改变，重新渲染视图
store.subscribe(()=>{
  ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root")
)
})

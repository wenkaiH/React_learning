//引入核心库
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'
//引入组件
import App from './App.jsx'
// import store from './redux/store.js'

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    ,document.getElementById("root")
)
// react-redux 不再需要自己手动监听
// store.subscribe(()=>{
//   ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//     ,document.getElementById("root")
// )
// })

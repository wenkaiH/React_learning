//引入核心库
import React from 'react'
import ReactDOM from 'react-dom'

//引入组件
import App from './App.jsx'
import store from './redux/store.js'
import Provide from 'react-redux'

ReactDOM.render(
    <Provide store={store}>
        <App/>
    </Provide>
    ,document.getElementById("root")
)

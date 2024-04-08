import React from "react";
// import ReactDOM  from "react-dom";  react-18版本后不再需要，直接引入下方的createRoot
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from "./App";

// 旧版本引入渲染组件
// ReactDOM.render(
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>,
//   document.getElementById('root')
// )

// 新版本引入渲染组件
const root=createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
import React from 'react'
import { NavLink,Outlet,useOutlet } from 'react-router-dom'

export default function Home() {
  // 如果嵌套路由没有挂载，返回null，否则，输出已挂载的对象
  console.log(useOutlet())
  return (
    <div>
      <h2>Home组件内容</h2>
    <div>
        <ul className="nav nav-tabs">
        <li>
            {/* 使用路由表可省略携带父级路由即/home/new，但不可直接使用/new，须指明当前路径下,有以下两种方式 */}
            <NavLink to = "./new">News</NavLink>
        </li>
        <li>
            <NavLink  to = "message">Message</NavLink>
        </li>
        </ul>
        {/* Outlet标注路由加载后要显示的位置 */}
        <Outlet/>
  </div>
  </div>
  )
}


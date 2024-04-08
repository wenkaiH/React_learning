import React from 'react'
import {NavLink,useRoutes,useInRouterContext} from 'react-router-dom'
import route from './route'
import Header from './components/header'

export default function App() {
  // 加载路由表
  const element=useRoutes(route)
  // 判断是否处于路由的上下文中，返回布尔值 因APP被包裹在BrowserRoute中，故其自身及子组件中判断也为true
  console.log(useInRouterContext())
  return (
    <div>
    <div className="row">
    <div className="col-xs-offset-2 col-xs-8">
        <Header />
    </div>
    </div>
    <div className="row">
    <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* 如果想引用选中后active时，使用自身的自定义样式(myStyle) 下方代码可改为
            <NavLink className={({isActive})=>{return isActive?'list-group-item myStyle':list-group-item}} end to = "/about" >About</NavLink>
            end ：设置配置项：选中子级，父级高亮不显示
          */}
            <NavLink className='list-group-item' to = "/about" >About</NavLink>
            <NavLink className='list-group-item' to = "/home" >Home</NavLink>
        </div>
    </div>
    <div className="col-xs-6">
        <div className="panel">
        <div className="panel-body">
           {/* 注册路由，也就是写对应的关系  caseSensitive匹配路由时是否区分大小写，不加默认不区分 */}
          {/* <Routes>
            <Route caseSensitive path="/about"element={<About/>}/>
            <Route path="/home"element={<Home/>}/>
              // 默认重定向 引起视图切换
            <Route path="/"element={<Navigate to='/about'/>}/>
            </Routes> */}
          {/* 如使用useRoutes路由表， 则上述代码可注释，改为路由表名称*/} 
          {element}
        </div>
        </div>
    </div>
    </div>
</div>
  )
}

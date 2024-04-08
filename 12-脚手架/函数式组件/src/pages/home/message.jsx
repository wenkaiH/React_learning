import React,{useState} from 'react'
import { Link,Outlet,useNavigate} from 'react-router-dom'

export default function Message() {
  const [message]=useState([
    {id:'1',title:'消息1',content:'锄禾日当午'},
    {id:'2',title:'消息2',content:'汗滴禾下土'},
    {id:'3',title:'消息3',content:'谁知盘中餐'},
    {id:'4',title:'消息4',content:'粒粒皆辛苦'},
  ])
  const navgite=useNavigate()
  function showDetail(item){
    navgite('detail',{
      replace:false,
      state:{
        id:item.id,
        title:item.title,
        content:item.content,
      }
    })
  }
  return (
    <div>
    <ul>
        {
          message.map((item)=>{
            return (
              <li key={item.id}>
                {/* 采用params传参： */}
                {/* <Link to={`detail/${item.id}/${item.title}/${item.content}`}>{item.title}</Link> */}

                {/* 采用search传参： */}
                {/* <Link to={`detail?id=${item.id}&title=${item.title}&content=${item.content}`}>{item.title}</Link> */}

                {/* 采用state传参 */}
                <Link to='detail' state={{
                  id:item.id,
                  title:item.title,
                  content:item.content
                }}>{item.title}</Link>

                {/* 点击事件跳转路由传参需借助 useNavgite API */}
                <button style={{margin:'10px'}} onClick={()=>showDetail(item)}>点我查看详情</button>
              </li>
            )
          })
        }
    </ul>
    <hr />
    <Outlet></Outlet>
    </div>
  )
}


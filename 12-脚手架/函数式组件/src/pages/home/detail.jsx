import React from 'react'
// import { useParams } from 'react-router-dom'  params传参  
// import { useSearchParams } from 'react-router-dom' search传参
import { useLocation } from 'react-router-dom'

export default function Detail() {
  // 采用params参数进行传参,如下：
  // const {id,title,content}=useParams()
  // console.log(id,title,content)

  // 采用search参数传参，如下：
  // const [search,setSearch]=useSearchParams()
  // const id=search.get('id')
  // const title=search.get('title')
  // const content=search.get('content')

  // 采用state参数传参，如下（连续赋值解构）：
  const {state:{id,title,content}}=useLocation()
  // console.log(id,title,content)
  return (
    <div >
      {/*  如果这里采用search传参时的setSearch方法改变参数内容： 
      <li>
        <button onClick={()=>{setSearch('id=5&title=消息4&content=修改的内容')}}>点我修改search参数</button>
      </li> */}
      <li style={{margin:'10px'}}>消息id：{id}</li>
      <li style={{margin:'10px'}}>消息title：{title}</li>
      <li style={{margin:'10px'}}>消息content：{content}</li>
    </div>
  )
}

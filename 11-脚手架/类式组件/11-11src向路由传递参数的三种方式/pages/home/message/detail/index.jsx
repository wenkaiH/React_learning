import React, { Component } from 'react'
// import qs from 'qs' 在接收search参数对携带参数进行解码为对象形式

const data=[
    {id:'1',content:'北京'},
    {id:'2',content:'上海'},
    {id:'3',content:'深圳'}
]

export default class Detail extends Component {
  render() {

    // 接收state参数
    const {id,title}=this.props.location.state||{}
    console.log(id,title)

    // 接收search参数
    // const {search}=this.props.location
    // const {id,title}=qs.parse(search.slice(1))

    // 接收params参数
    // const {id,title}=this.props.match.params

    const res=data.find((item)=>{
        return item.id===id
    })||{}
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{res.content}</li>
        </ul>
      </div>
    )
  }
}

import React,{Component}from 'react'
//同文件下组件采用相同的css类型标签名称，为防止两者共同引入到APP组件中产生样式冲突（覆盖，具体参见hello和welcom的css的样式文件），可采用moudle形式
import hello from './hello.module.css'

export default class Hello extends Component{
    render() {
        return (
            <h1 className={hello.title}>Hello</h1>
        )
    }
}
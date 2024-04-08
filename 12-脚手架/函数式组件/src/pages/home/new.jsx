import React from 'react'
import { useNavigationType,useResolvedPath } from 'react-router-dom'

export default function New() {
  // 判断是哪种方式进入该组件，pop（刷新界面）,push,replace三种类型
  console.log(useNavigationType())
  // 给定一个URL地址，解析地址信息
  console.log(useResolvedPath('/user?name=zs&age=20'))
  return (
    <div>
    <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
    </div>
  )
}


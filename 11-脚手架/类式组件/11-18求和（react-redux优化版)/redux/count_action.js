// 该文件专门为count组件生成action对象

import {ADD,DEL} from './constant'
import store from './store'

// 同步action，就是指action的值为object类型的一般对象

export const AddAction=data=>({type:ADD,data:data})
export const DelAction=data=>({type:DEL,data})

// 异步action,就是指action的值为函数,异步action一般会调用同步action，异步action不是一定要用的

export const AddAsyncAction=(data,time)=>{
  return ()=>{
    setTimeout(()=>{
      store.dispatch(AddAction(data))
    },time)
  }
}
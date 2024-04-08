// 设置reducers加工函数（纯函数）
const initState=0
export default function countReducers(preState=initState,action){
  const{type,data}=action
  switch (type) {
    case 'Add':
      return preState+data
    case 'Del':
      return preState-data
    default:
      return preState
  }
}
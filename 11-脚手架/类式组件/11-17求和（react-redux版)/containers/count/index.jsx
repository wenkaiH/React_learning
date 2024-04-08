// 引入count的UI组件
import CountUI from '../../components/count'
// 引入connect连接两者
import {connect} from 'react-redux'

import { AddAction,DelAction,AddAsyncAction } from '../../redux/count_action'

//  函数的返回值为容器组件传递给UI组件的Props值-----状态
function get(state){
    return {
        count:state
    }
}
// 函数的返回值为操作数据的方法-----操作状态
function set(dispatch){
    return {
        add:(data)=>{
            dispatch(AddAction(data))
        },
        del:(data)=>{
            dispatch(DelAction(data))
        },
        addAsycn:(data)=>{
            dispatch(AddAsyncAction(data))
        }
    }
}

const CountContainer = connect(get,set)(CountUI)

// 暴露Count的容器组件  (参照React_image)
export default CountContainer
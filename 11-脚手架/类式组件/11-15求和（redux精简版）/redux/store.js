// 引入redux的createStore构建一个store仓库
import {legacy_createStore as createStore} from 'redux'
// 引入用于加工处理的reducers
import countReducers from './count_reducers'
// 导出store仓库
export default createStore(countReducers)
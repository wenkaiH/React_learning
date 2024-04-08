// 引入redux的createStore构建一个store仓库
import {legacy_createStore as createStore,applyMiddleware} from 'redux'
// 引入用于加工处理的reducers
import countReducers from './count_reducers'
// 引入redux-thunk用于支持异步action
import thunk from 'redux-thunk'
//引入redux的开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 导出store仓库
export default createStore(countReducers,composeWithDevTools(applyMiddleware(thunk)))
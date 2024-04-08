//创建外壳组件APP
import React,{Component} from 'react'
import Count from './containers/count'
import store from './redux/store'

class App extends Component{
    render(){
        return (
            <div>
              <Count store={store}></Count>
            </div>

        )
    }
}

export default App
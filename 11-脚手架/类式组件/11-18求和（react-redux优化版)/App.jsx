//创建外壳组件APP
import React,{Component} from 'react'
import Count from './containers/count'

export default class App extends Component{
    render(){
        return (
            <div>
              <Count></Count>
            </div>

        )
    }
}
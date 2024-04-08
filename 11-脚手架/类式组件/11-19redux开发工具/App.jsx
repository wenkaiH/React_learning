//创建外壳组件APP
import React,{Component} from 'react'
import {Button} from 'antd'
import Count from './components/count'

class App extends Component{

    render(){
        return (
            <div>
              {/* ant-design官方文档:https://ant.design/docs/react/introduce-cn */}
              <Button style={{marginTop:'10px'}}>Button</Button>
              <Button type='primary' style={{marginTop:'10px'}}>Primary Button</Button>
              <hr />
              <Count></Count>
            </div>

        )
    }
}

export default App
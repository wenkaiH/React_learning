import React, { Component } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

class Header extends Component {
    Back=()=>{
      this.props.history.goBack()
    }
    Forward=()=>{
      this.props.history.goForward()
    }
    render() {  
        return (
            <div className="page-header">
              <h2>React Router Demo</h2>
              <button onClick={this.Back} style={{marginRight:'15px'}}>goBack</button>
              <button onClick={this.Forward}>goForward</button>
            </div>
        )
    }
}
// 使用withRouter插件可以加工一般组件，让其拥有路由组件的API，返回值是一个新组建
export default withRouter(Header)

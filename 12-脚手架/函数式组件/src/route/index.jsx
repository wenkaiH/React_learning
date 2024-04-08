import About from '../pages/about'
import Home from '../pages/home'
import New from '../pages/home/new'
import Message from '../pages/home/message'
import Detail from '../pages/home/detail'
import { Navigate } from 'react-router-dom'
const route= [
   {
     path:'/about',
     element:<About></About>
   },
   {
     path:'/home',
     element:<Home></Home>,
     children:[
        {
          path:'new',
          element:<New/>,
        },
        {
          path:'message',
          element:<Message/>,
          children:[
            {
              // 如采用params传参：
              // path:'detail/:id/:title/:content',
               // 如采用search传参和state传参，则 (= 默认，不需要改变)：
              path:'detail',
              element:<Detail/>,
            }
          ]
        },
        {
          path:'/home/',
          element:<Navigate to='./new'></Navigate>
        }
     ]
   },
   {
     path:'/',
     element:<Navigate to='./about'></Navigate>
   }
]
export default route
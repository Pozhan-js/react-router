import React, { Component, Suspense } from 'react'
import { Route, NavLink } from 'react-router-dom'
import './index.css'
// import Message from '../Message'
// import News from '../News'

const Message = React.lazy(() => import('../Message'))
const News = React.lazy(() => import('../News'))

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2 className='title'>Home组件内容</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <NavLink activeClassName='top' activeStyle={{
                backgroundColor: 'green'
              }} to='/home/news'>News</NavLink>
            </li>
            <li>
              <NavLink activeClassName='top' activeStyle={{
                backgroundColor: 'green'
              }} to='/home/message'>Message</NavLink>
            </li>
          </ul>
          <div>
            <div>
              {/* <News></News>
              <Message></Message> */}
              <Suspense fallback={<h1 style={{ color: 'red' }}>...正在加载</h1>}>
                <Route path={'/home/news'} component={News}></Route>
                <Route path={'/home/message'} component={Message}></Route>
              </Suspense>
            </div>
          </div>
        </div >
      </div >
    )
  }
}

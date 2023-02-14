import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../Detail'

export default class index extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={'/home/message/detail/1'}>message001</Link>
          </li>
          <li>
            <Link to={'/home/message/detail/2'}>message002</Link>
          </li>
          <li>
            <Link to={'/home/message/detail/3'}>message003</Link>
          </li>
        </ul>
        <button onClick={() => {
          this.props.history.push('/home/message/detail/4')
        }}>添加</button>
        <button onClick={() => {
          this.props.history.replace('/home/message/detail/5')
        }}>替换</button>
        {/* <Detail></Detail> */}
        <Route path={'/home/message/detail/:id?'} component={Detail}></Route>
      </div>
    )
  }
}

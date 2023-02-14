import React, { Component } from 'react'
import style from './index.module.css'

export default class About extends Component {

  render() {
    console.log(style);
    return <h2 className={style.title} > About组件内容</h2 >
  }
}

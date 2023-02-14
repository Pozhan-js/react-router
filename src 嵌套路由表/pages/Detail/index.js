import React, { Component } from 'react'

export default class Detail extends Component {
  render() {
    console.log('Detail', this.props);
    return <h5>detail的内容~~~{this.props.match.params.id}</h5>
  }
}

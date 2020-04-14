import React, { Component } from 'react'
import base from './base'

@base
class wrap extends Component {
  state = {
    baseName: 'name'
  }
  render() {
    return (
      <div>
        我是wrap 我使用了公共数据sex:{this.props.sex}
        我是baseName:{this.state.baseName}
      </div>
    )
  }
}

export default wrap
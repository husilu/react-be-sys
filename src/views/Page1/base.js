import React, { Component } from 'react'

const Base = Wrap => class extends Component {
  render() {
    const props = {
      sex: 'nv',
      ...this.props
    }
    return (
      <Wrap {...props}></Wrap>
    )
  }
}

export default Base

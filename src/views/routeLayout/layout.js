import React, { Component } from 'react'
import Layout from '../../components/common/routeLayout'

export default class layout extends Component {
  render() {
    const props = this.props
    return (
      <Layout {...props}></Layout>
    )
  }
}

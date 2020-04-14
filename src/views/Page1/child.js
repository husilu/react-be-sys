import React, { PureComponent } from 'react'
import Wrap from './wrap'

export default class child extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      info: ''
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('子组件刷新')
    // console.log('（2）componentDidUpdate()', prevProps, this.props)
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('getDerivedStateFromProps')
  //   if (nextProps.info !== prevState.info) {
  //     return {
  //       info: nextProps.info
  //     }
  //   }
  //   return null;
  // }
  render() {
    console.log('子组件 render')
    return (
      <div>
        {this.props.info}
        <Wrap></Wrap>
      </div>
    )
  }
}

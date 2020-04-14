import React, { PureComponent } from 'react'

export default class rcc extends PureComponent {
  // constructor() {
  //   super()
  // }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('子组件刷新')
    // console.log('（2）componentDidUpdate()', prevProps, this.props)
  }
  render() {
    console.log('rcc', this)
    return (
      <div>
        rcc: {this.props.num}
      </div>
    )
  }
}

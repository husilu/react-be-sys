import React, { Component } from 'react'
import Childrfc from './rfc'
import Childrcc from './rcc'
export default class page2one extends Component {
  // handleClick2;
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      title: 'react study'
    };
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick1() {
    this.setState({
      num: this.state.num
    })
  }
  handleClick2() {
    this.setState({
      num: this.state.num
    })
    // console.log('as')
  }
  render() {
    return (
      <div>
        <h2>ann, {this.state.num}</h2>
        <button onClick={this.handleClick1}>click1</button>
        <button onClick={this.handleClick2.bind(this)}>render函数中绑定this</button>
        <Childrfc num={this.state.num}></Childrfc>
        <Childrcc num={this.state.num}></Childrcc>
      </div>
    )
  }
}

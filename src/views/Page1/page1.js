import React, { Component } from 'react'
import Child from './child'
import Wrap from './wrap'
import Parent from './parent'
import style from './style.less'

export default class Page1 extends Component {
  constructor(props) {
    super()
    this.myRef = React.createRef()
    this.state = {
      showdiv: true,
      showflag: false,
      info: 'abc'
    }
  }
  okHandler = (arg,e) => {
    console.log(this.myRef.current.value)
  }
  change1Handler() {
    this.setState({
      info: 'bcd'
    })
  }
  change2Handler = () => {
    this.setState({
      info: 'abc'
    })
  }
  click1Handler = () => {
    this.setState({
      info: 'click1Handler'
    })
  }
  render() {
    return (
      <div>
        <Wrap></Wrap>
        <input type="text" ref={this.myRef}/>
        <button onClick={this.okHandler.bind(this, 1)}>按钮1</button>
        <button onClick={this.change1Handler.bind(this)}>chanage变化</button>
        <button onClick={this.change2Handler.bind(this)}>chanage不变化</button>
        <button onClick={this.click1Handler}>上()=>箭头函数方法</button>
        <button onClick={() => this.change1Handler()}>change1Handler</button>
        <Child info={this.state.info}></Child>
        {
          this.state.showdiv && <div>showdiv</div>
        }
        {
          this.state.showflag ? (<div>showflag</div>) : null
        }
        <div className={style.box}>
          <p>parent</p>
          <Parent></Parent>
        </div>
      </div>
    )
  }
}

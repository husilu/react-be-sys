import React, { Component } from 'react'
import AntdTable from './antdtable'
import FixedTable from './fixedtable'
import style from './index.less';
import ajax from '@/utils/ajax'
export default class page3 extends Component {
  componentDidMount() {
    ajax('/topics').then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div className={style.py2}>
        <AntdTable></AntdTable>
        {/* <FixedTable></FixedTable> */}
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Table, Column, Cell } from 'fixed-data-table-2'
import 'fixed-data-table-2/dist/fixed-data-table.css';
const rows = [];
for(let i =0; i< 1000; i ++) {
  rows.push(`${i} row`)
}
const MyCustomCell = ({ mySpecialProp }) =>
  <Cell>
    {mySpecialProp === "column2" ? "I'm column 2" : "I'm not column 2"}
  </Cell>;
export default class page3 extends Component {
  render() {
    return (
      <Table
        rowHeight={50}
        rowsCount={rows.length}
        width={1000}
        height={500}
        headerHeight={50}>
        <Column
          cell={<Cell>Basic content</Cell>}
          width={200}
        />
      </Table>
    )
  }
}

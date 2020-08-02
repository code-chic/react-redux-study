import React from 'react'
import Add from './Add'
import Render from './Render'

export default class Table extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Add />
        <p />
        <table width="100%" border="1">
          <thead>
            <tr>
              <th>序号</th>
              <th>名称</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <Render />
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

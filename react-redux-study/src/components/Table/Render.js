import React from 'react'
import { connect } from 'react-redux'
import { DEL_USER } from '../../store/actions'

const Render = ({ users, delUser }) => users.map((u, index) => (
  <tr key={u.id + '' + index}>
    <td>{u.id}</td>
    <td>{u.name}</td>
    <td>
      <button type="button" onClick={() => delUser(u.id)}>Delete</button>
    </td>
  </tr>
))

function mapStateToProps(state) {
  return {
    users: state.user
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    delUser: id => dispatch({
      type: DEL_USER,
      id
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Render)

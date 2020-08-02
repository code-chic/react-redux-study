import React from 'react'
import { connect } from 'react-redux'

const CreaseButton = ({ children, dispatch }) => (
  <button type="button" onClick={ dispatch }>{ children }</button>
)

// 注入状态到组件的 props
function mapStateToProps(state) {
  return {
    count: state.counter
  }
}

// 注入dispatch到组件的 props
function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch: () => dispatch({
      type: ownProps.type
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreaseButton)



import React from 'react'
import { connect } from 'react-redux'

const ViewCounter = ({ count }) => (
  <p>count: {count}</p>
)

function mapStateToProps(state) {
  return {
    count: state.counter
  }
}

export default connect(
  mapStateToProps
)(ViewCounter)

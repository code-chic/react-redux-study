import React from 'react'
import { INCREASE, DECREASE } from '../../store/actions'
import CreaseButton from './CreaseButton'
import ViewCounter from './ViewrCounter'

export default class Conuter extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ViewCounter />
        <CreaseButton type={INCREASE}>count++</CreaseButton>
        {' '}
        <CreaseButton type={DECREASE}>count--</CreaseButton>
      </React.Fragment>
    )
  }
}

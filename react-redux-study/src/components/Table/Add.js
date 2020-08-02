import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ADD_USER } from '../../store/actions'

const Add = ({ addUser }) => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const addHandle = () => {
    setId('')
    setName('')
    addUser({ id, name })
  }

  return (
    <div>
      <input 
        placeholder="id" 
        value={id} 
        onChange={e => setId(e.target.value)} 
      />
      {' '}
      <input 
        placeholder="name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      {' '}
      <button type="button" onClick={addHandle}>add</button>
    </div>
  )
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addUser: action => dispatch({
      type: ADD_USER,
      id: action.id,
      name: action.name
    })
  }
}

export default connect(
  undefined,
  mapDispatchToProps
)(Add)

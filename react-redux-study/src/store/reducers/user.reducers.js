import { ADD_USER, DEL_USER } from '../actions'

function user(state = [], action) {
  switch(action.type) {
    case ADD_USER:
      return state = state.concat({
        id: action.id,
        name: action.name
      })
    case DEL_USER:
      return state.filter(u => u.id !== action.id)
    default:
      return state
  }
}

export default {
  namespace: 'user',
  reducers: user
}

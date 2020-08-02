import { createStore, combineReducers } from 'redux'

const moduleReducers = {}

const importReducers = require.context('./reducers', false, /\.reducers.js/i)
importReducers.keys().forEach(key => {
  const { namespace, reducers } = importReducers(key).default
  moduleReducers[namespace] = reducers
})

const reducers = combineReducers(moduleReducers)

export default createStore(reducers)

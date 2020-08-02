import React from 'react'
import { render } from 'react-dom'
import { Provider } from "react-redux";
import store from './store/index.js'
import Counter from './components/Counter'
import Table from './components/Table'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter/>
        <p />
        <Table />
      </React.Fragment>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
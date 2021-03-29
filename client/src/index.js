import { rootReducer } from './store/rootReducer'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import React from 'react'
import App from './components/App/App'
import './index.scss'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
)

const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(
  app,
  document.getElementById('root')
)


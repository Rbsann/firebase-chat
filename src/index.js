import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import rootSaga from './redux/saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import Reducer, { initialState } from './redux/reducer'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  Reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

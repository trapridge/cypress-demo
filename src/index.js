// @flow

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import type { Action } from './actions'
import App from './components/App'
import rootReducer from './reducers'
import { unregister } from './serviceWorker'
import './index.css'

const store = createStore<typeof rootReducer, Action, _>(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  // $FlowFixMe
  document.getElementById('root')
)

unregister()

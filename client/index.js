import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'

import reducers from './reducers'
import App from './components/App'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login']
}

const persistedReducer = persistReducer(persistConfig, reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

const checkLogin = () => {
  if (!global.window.localStorage.token) {
    global.window.localStorage.setItem('persist:root', '{login: "false", _persist: "{"version":-1,"rehydrated":true}"}')
  }
}

let persistor = persistStore(store, [null, checkLogin()])

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </ PersistGate>
    </Provider>,
    document.getElementById('app')
  )
})

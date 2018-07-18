import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import register from './register'

export default combineReducers({
  errorMessage,
  waiting,
  register
})

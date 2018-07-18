import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'

export default combineReducers({
  errorMessage,
  waiting
})

import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import register from './auth/register'
import userDetails from './auth/userDetails'

export default combineReducers({
  errorMessage,
  waiting,
  register,
  userDetails
})

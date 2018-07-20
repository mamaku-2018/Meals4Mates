import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'
import totalStats from './totalStats'

export default combineReducers({
  errorMessage,
  waiting,
  register,
  login,
  userDetails,
  totalStats
})

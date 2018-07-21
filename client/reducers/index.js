import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'
import storeBalance from './storeBalance'
import storeStats from './storeStats'

export default combineReducers({
  errorMessage,
  waiting,
  register,
  login,
  userDetails,
  storeBalance,
  storeStats
})

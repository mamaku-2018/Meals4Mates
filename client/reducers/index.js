import {combineReducers} from 'redux'

import waiting from './waiting'
import errorMessage from './errorMessage'
import register from './auth/register'
import login from './auth/login'
import userDetails from './auth/userDetails'
import totalStats from './totalStats'
import storeBalance from './storeBalance'
import storeStats from './storeStats'
import companyList from './companyList'
import storeDetails from './storeDetails'
import adminStats from './adminStats'

export default combineReducers({
  errorMessage,
  waiting,
  register,
  login,
  userDetails,
  storeBalance,
  storeStats,
  companyList,
  totalStats,
  storeDetails,
  adminStats
})

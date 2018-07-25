import {
  REQUEST_STATS,
  RECEIVE_STATS} from '../actions/storeStats'
import {
  REQUEST_BALANCE,
  RECEIVE_BALANCE} from '../actions/storeBalance'
import {
  REQUEST_STORE_DETAILS,
  RECEIVE_STORE_DETAILS} from '../actions/getAllStoreLocations'
import {
  REQUEST_ADMIN_STATS,
  RECEIVE_ADMIN_STATS} from '../actions/adminStats'
import {
  SHOW_ERROR} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return true

    case RECEIVE_STATS:
      return false

    case REQUEST_ADMIN_STATS:
      return true

    case RECEIVE_ADMIN_STATS:
      return false

    case REQUEST_BALANCE:
      return true

    case RECEIVE_BALANCE:
      return false

    case REQUEST_STORE_DETAILS:
      return true

    case RECEIVE_STORE_DETAILS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting

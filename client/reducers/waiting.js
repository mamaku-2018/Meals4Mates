import {
  REQUEST_STATS,
  RECEIVE_STATS} from '../actions/storeStats'
import {
  REQUEST_BALANCE,
  RECEIVE_BALANCE} from '../actions/storeBalance'
import {
  SHOW_ERROR} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return true

    case RECEIVE_STATS:
      return false

    case SHOW_ERROR:
      return false

    case REQUEST_BALANCE:
      return true

    case RECEIVE_BALANCE:
      return false

    default:
      return state
  }
}

export default waiting

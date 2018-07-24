import {
  REQUEST_STATS,
  RECEIVE_STATS} from '../actions/storeStats'
  import {SHOW_ERROR} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return true

    case RECEIVE_STATS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting

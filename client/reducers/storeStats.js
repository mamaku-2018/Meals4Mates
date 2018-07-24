import {
  REQUEST_STATS,
  RECEIVE_STATS
} from '../actions/storeStats'

const storeStats = (state = null, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return null

    case RECEIVE_STATS:
      return action.balance

    default:
      return state
  }
}

export default storeStats

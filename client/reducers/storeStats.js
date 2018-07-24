import {
  RECEIVE_STATS
} from '../actions/storeStats'

const storeStats = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_STATS:
      return action.balance

    default:
      return state
  }
}

export default storeStats

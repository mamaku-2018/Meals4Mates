import {
  REQUEST_ADMIN_STATS,
  RECEIVE_ADMIN_STATS
} from '../actions/adminStats'

const adminStats = (state = null, action) => {
  switch (action.type) {
    case REQUEST_ADMIN_STATS:
      return null

    case RECEIVE_ADMIN_STATS:
      return action.stats

    default:
      return state
  }
}

export default adminStats

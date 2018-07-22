import {RECEIVE_TOTAL_STATS} from '../actions/getTotalStats'

const totalStats = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_TOTAL_STATS:
      return action.stats

    default:
      return state
  }
}

export default totalStats

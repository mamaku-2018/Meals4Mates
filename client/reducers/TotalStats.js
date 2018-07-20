import {REQUEST_TOTAL_STATS, RECEIVE_TOTAL_STATS} from '../actions/getTotalStats'

const initial = {
  donations: 0,
  redemptions: 0
}

const requestTotalStats = (state = false, action) => {
  switch (action.type) {
    case REQUEST_TOTAL_STATS:
      return true

    default:
      return state
  }
}

export default register

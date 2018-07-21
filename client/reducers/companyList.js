import {
  REQUEST_STATS,
  RECEIVE_STATS
} from '../actions/companyList'

const companyList = (state = null, action) => {
  switch (action.type) {
    case REQUEST_STATS:
      return null

    case RECEIVE_STATS:
      return action.stats

    default:
      return state
  }
}

export default companyList

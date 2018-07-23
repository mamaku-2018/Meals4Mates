import {
  REQUEST_LIST_STATS,
  RECEIVE_LIST_STATS
} from '../actions/companyList'

const companyList = (state = null, action) => {
  switch (action.type) {
    case REQUEST_LIST_STATS:
      return null

    case RECEIVE_LIST_STATS:
      return action.stats

    default:
      return state
  }
}

export default companyList

import {
  REQUEST_STORE_DETAILS,
  RECEIVE_STORE_DETAILS
} from '../actions/getAllStoreLocations'

const storeDetails = (state = null, action) => {
  switch (action.type) {
    case REQUEST_STORE_DETAILS:
      return null

    case RECEIVE_STORE_DETAILS:
      return action.details

    default:
      return state
  }
}

export default storeDetails

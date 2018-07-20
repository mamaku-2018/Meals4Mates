import {
  REQUEST_BALANCE,
  RECEIVE_BALANCE
} from '../actions/storeBalance'

const storeBalance = (state = null, action) => {
  switch (action.type) {
    case REQUEST_BALANCE:
      return null

    case RECEIVE_BALANCE:
      return action.balance

    default:
      return state
  }
}

export default storeBalance

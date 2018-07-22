import {
  REQUEST_BALANCE,
  RECEIVE_BALANCE,
  getStoreBalance
} from '../../../client/actions/storeBalance'

test('storeBalance returns true during REQUEST_USER_REGISTRATION', () => {
  const currentState = false
  const action = {
    type: REQUEST_BALANCE
  }
  const newState = getStoreBalance(currentState, action)
  expect(newState).toEqual(null)
})

test('storeBalance returns false during RECEIVE_USER_REGISTRATION', () => {
  const currentState = true
  const action = {
    type: RECEIVE_BALANCE
  }
  const newState = getStoreBalance(currentState, action)
  expect(newState).toEqual(false)
})

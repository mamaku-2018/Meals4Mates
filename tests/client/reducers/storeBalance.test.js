import {
  REQUEST_BALANCE,
  RECEIVE_BALANCE,
  requestBalance,
  receiveBalance
} from '../../../client/actions/storeBalance'

test('requestBalance returns correct type', () => {
  const currentState = null
  const action = {
    type: REQUEST_BALANCE
  }
  const newState = requestBalance(currentState, action)
  expect(newState).toEqual({'type': 'REQUEST_BALANCE'})
})

test('storeBalance returns false during RECEIVE_BALANCE', () => {
  const currentState = true
  const action = {
    type: RECEIVE_BALANCE
  }
  const newState = receiveBalance(currentState, action)
  expect(newState).toEqual({'balance': true, 'type': 'RECEIVE_BALANCE'})
})

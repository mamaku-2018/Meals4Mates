import {
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION
} from '../../../../client/actions/auth/register'
import register from '../../../../client/reducers/auth/register'

test('register returns true during REQUEST_USER_REGISTRATION', () => {
  const currentState = false
  const action = {
    type: REQUEST_USER_REGISTRATION
  }
  const newState = register(currentState, action)
  expect(newState).toBe(true)
})

test('register returns false during RECEIVE_USER_REGISTRATION', () => {
  const currentState = true
  const action = {
    type: RECEIVE_USER_REGISTRATION
  }
  const newState = register(currentState, action)
  expect(newState).toBe(false)
})

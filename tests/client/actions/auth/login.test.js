import './saveAuthTokenMock'
import {
  REQUEST_LOGIN,
  requestLogin,
  RECEIVE_LOGIN,
  receiveLogin,
  LOG_OUT,
  logOut
  // LOG_OUT,
  // logOut
} from '../../../../client/actions/auth/login'

test('requestLogin returns the right action', () => {
  const expected = {type: REQUEST_LOGIN}
  const actual = requestLogin()
  expect(actual).toEqual(expected)
})

test('receiveLogin return the right action', () => {
  const expected = {type: RECEIVE_LOGIN}
  const actual = receiveLogin()
  expect(actual).toEqual(expected)
})

test('receiveLogin returns type details', () => {
  const token = 'skjfhklskwwjerrnlkasjhfHdfgdDdfJN'
  const expected = {
    type: RECEIVE_LOGIN,
    token: token
  }
  const actual = receiveLogin(token)
  expect(actual).toEqual(expected)
})

test('logOut returns the right action', () => {
  const expected = {type: LOG_OUT}
  const actual = logOut()
  expect(actual).toEqual(expected)
})

import {
  REQUEST_USER_REGISTRATION,
  requestUserRegistration,
  RECEIVE_USER_REGISTRATION,
  receiveUserRegistration,
  REQUEST_USER_DETAILS,
  requestUserDetails,
  RECEIVE_USER_DETAILS,
  receiveUserDetails
} from '../../../../client/actions/auth/register'

test('requestUserRegistration returns correct action', () => {
  const expected = {type: REQUEST_USER_REGISTRATION}
  const actual = requestUserRegistration()
  expect(actual).toEqual(expected)
})

test('receiveUserRegistration returns correct action', () => {
  const expected = {type: RECEIVE_USER_REGISTRATION}
  const actual = receiveUserRegistration()
  expect(actual).toEqual(expected)
})

test('receiveUserRegistration returns type details', () => {
  const token = 'test token'
  const expected = {
    type: RECEIVE_USER_REGISTRATION,
    token: 'test token'
  }
  const actual = receiveUserRegistration(token)
  expect(actual).toEqual(expected)
})

test('requestUserDetails returns correct action', () => {
  const expected = {type: REQUEST_USER_DETAILS}
  const actual = requestUserDetails()
  expect(actual).toEqual(expected)
})

test('receiveUserDetails returns correct action', () => {
  const expected = {type: RECEIVE_USER_DETAILS}
  const actual = receiveUserDetails()
  expect(actual).toEqual(expected)
})

test('receiveUserDetails returns type details', () => {
  const user = 'test user'
  const expected = {
    type: RECEIVE_USER_DETAILS,
    user: 'test user'
  }
  const actual = receiveUserDetails(user)
  expect(actual).toEqual(expected)
})

import decode from 'jwt-decode'
import {saveToken, getToken} from './token'

export function Authenticated () {
  const authToken = getToken()

  if (authToken) {
    const payLoad = decode(authToken)
    const expiry = payLoad.expiry

    if (expiry < new Date().getTime() / 1000) {
      logOff()
      return false
    }
    return true
  } else {
    return false
  }
}

export function saveAuthToken (authToken) {
  saveToken(authToken)
  return decode(authToken)
}

export function getAuthToken () {
  const authToken = getToken()
  return authToken ? decode(authToken) : null
}

export function getEncodedToken () {
  return getToken()
}

export function logOff () {
  saveToken(null)
}

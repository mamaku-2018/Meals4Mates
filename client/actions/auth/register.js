import {showError, clearError, showSuccess} from '../'
import {saveAuthToken} from '../../lib/auth'
import request from '../../lib/apiClient'
import Geocode from 'react-geocode'

Geocode.setApiKey(process.env.GOOGLE_API_KEY)
Geocode.enableDebug()

export const REQUEST_USER_REGISTRATION = 'REQUEST_USER_REGISTRATION'
export const RECEIVE_USER_REGISTRATION = 'RECEIVE_USER_REGISTRATION'
export const REQUEST_USER_DETAILS = 'REQUEST_USER_DETAILS'
export const RECEIVE_USER_DETAILS = 'RECEIVE_USER_DETAILS'

export const requestUserRegistration = () => {
  return {
    type: REQUEST_USER_REGISTRATION
  }
}

export const receiveUserRegistration = (token) => {
  return {
    type: RECEIVE_USER_REGISTRATION,
    token
  }
}

export const requestUserDetails = () => {
  return {
    type: REQUEST_USER_DETAILS
  }
}

export const receiveUserDetails = (user) => {
  return {
    type: RECEIVE_USER_DETAILS,
    user
  }
}

export function register (user) {
  return dispatch => {
    dispatch(requestUserRegistration())
    const searchAddress = user.address + ', ' + user.suburb + ', ' + user.city
    return getLatLng(searchAddress)
      .then(latLng => {
        const updatedUser = {
          owner: user.owner,
          email: user.email,
          name: user.name,
          address: user.address,
          suburb: user.suburb,
          city: user.city,
          lat: latLng.lat,
          lng: latLng.lng,
          phone: user.phone,
          password: user.password
        }
        return request('post', '/auth/register', updatedUser)
          .then(res => {
            const token = saveAuthToken(res.body.token)
            dispatch(receiveUserRegistration(res.body))
            dispatch(getUserDetails(token.id))
            dispatch(clearError())
            dispatch(showSuccess('Registration successful'))
          })
      })
      .catch(err => {
        if (err.message === 'User exists') {
          return dispatch(showError('This email is already registered'))
        } else {
          return dispatch(showError('An unexpected error has occurred'))
        }
      })
  }
}

export function getUserDetails (id) {
  return (dispatch) => {
    dispatch(requestUserDetails())
    request('get', `/auth/${id}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
        dispatch(clearError)
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

export function getLatLng (userAddress) {
  return Geocode.fromAddress(userAddress).then(
    response => {
      const {lat, lng} = response.results[0].geometry.location
      const latLng = {
        lat: lat,
        lng: lng
      }
      return (latLng)
    },
    error => {
      // eslint-disable-next-line
      console.error('error: ', error)
    }
  )
}

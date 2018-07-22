import request from 'superagent'
import {showError} from '../'

export const REQUEST_STORE_DETAILS = 'REQUEST_STORE_DETAILS'
export const RECEIVE_STORE_DETAILS = 'RECEIVE_STORE_DETAILS'

export const requestStoreDetails = () => {
  return {
    type: REQUEST_STORE_DETAILS
  }
}

export const receiveStoreDetails = (details) => {
  return {
    type: RECEIVE_STORE_DETAILS,
    details
  }
}

export function getAllStoreLocations () {
  return (dispatch) => {
    return request
      .get(`/api/v1/store`)
      .then(details => {
        dispatch(receiveStoreDetails(details.body))
      })
      .catch(() => {
        dispatch(showError('An unexpected error has occurred'))
      })
  }
}

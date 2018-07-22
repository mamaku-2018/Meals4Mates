import request from 'superagent'
import {showError} from '../'

export function getAllStoreLocations () {
  return (dispatch) => {
    return request
      .get(`/api/v1/store`)
      .then(res => {
        dispatch()
      })
  }
}

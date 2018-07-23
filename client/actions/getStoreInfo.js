import request from 'superagent'
import {receiveUserDetails} from './auth/register'
import {showError} from '.'

export function getStoreInfo (id) {
  return dispatch => {
    return request
      .get(`api/v1/store/${id}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body))
      })
      .catch(() => {
        dispatch(showError('No information found'))
      })
  }
}

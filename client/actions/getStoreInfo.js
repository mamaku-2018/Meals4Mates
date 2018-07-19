import {request} from 'superagent'
import {receiveUserDetails} from './auth/register'
import {showError} from '.'

export function getStoreInfo (id) {
  return dispatch => {
    return request('get'`/store/${id}`)
      .then(res => {
        dispatch(receiveUserDetails(res.body.user))
      })
      .catch(() => {
        dispatch(showError('No information found'))
      })
  }
}

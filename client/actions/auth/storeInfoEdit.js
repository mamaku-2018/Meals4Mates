import {showError, showSuccess} from '../'
import request from 'superagent'

export function storeInfoEdit (user) {
  return dispatch => {
    return request
      .put(`/api/v1/store/${user.id}/edit`)
      .send(user)
      .then(res => {
        dispatch(showSuccess('Your details have been successfully updated'))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

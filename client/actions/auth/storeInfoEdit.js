import {showError, showSuccess} from '../'
import request from '../../lib/apiClient'

export function storeInfoEdit (user) {
  return dispatch => {
    return request
      .post('/api/v1/store/edit')
      .send(user)
      .then(res => {
        dispatch(showSuccess('Your details have been successfully updated'))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

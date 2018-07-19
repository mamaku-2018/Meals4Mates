import {
  REQUEST_USER_REGISTRATION,
  RECEIVE_USER_REGISTRATION
} from '../../actions/auth/register'

const register = (state = false, action) => {
  switch (action.type) {
    case REQUEST_USER_REGISTRATION:
      return true

    case RECEIVE_USER_REGISTRATION:
      return false

    default:
      return state
  }
}

export default register

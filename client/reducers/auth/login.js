import {
  REQUEST_LOGIN,
  RECEIVE_LOGIN
} from '../../actions/auth/login'

const login = (state = false, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return false
    case RECEIVE_LOGIN:
      return true
    default:
      return state
  }
}

export default login

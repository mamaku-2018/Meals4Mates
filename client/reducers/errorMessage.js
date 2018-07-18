import {SHOW_ERROR, CLEAR_ERROR, SHOW_SUCCESS} from '../actions'

function errorMessage (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.errorMessage

    case CLEAR_ERROR:
      return ''

    case SHOW_SUCCESS:
      return action.message

    default:
      return state
  }
}

export default errorMessage

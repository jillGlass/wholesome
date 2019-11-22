import { REQUEST_PROMPT, SHOW_ERROR, RECEIVE_PROMPT } from '../actions/index'

export default function waiting (state = false, action) {
  switch (action.type) {
    case REQUEST_PROMPT:
      return true
    case RECEIVE_PROMPT:
      return false
    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

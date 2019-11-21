import { REQUEST_PROMPT, RECEIVE_PROMPT, SHOW_ERROR } from '../actions'

function promptReducer (state = {}, action) {
  switch(action.type) {
    case RECIEVE_PROMPT:
      return action.prompts

    default:
      return state
  }
}


{
  waiting: true,
  id: '',
  prompt: ''
}

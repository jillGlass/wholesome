import { RECEIVE_PROMPT } from '../actions'

export default function promptReducer (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROMPT:
      return action.prompts

    default:
      return state
  }
}

// {
//   waiting: true,
//   id: '',
//   prompt: ''
// }

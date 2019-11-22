import { RECEIVE_PROMPT } from '../actions'

export default function prompt (state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROMPT:
      console.log('reducer here')
      console.log(action.prompt)
      return {
        ...state,
        prompt: action.prompt
      }

    default:
      return state
  }
}

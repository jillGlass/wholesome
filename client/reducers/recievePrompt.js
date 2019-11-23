import { RECEIVE_PROMPT } from '../actions'

const initialState = {
  promptItem: 'been kicked out of a bar'
}

export default function prompt (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROMPT:
      return {
        ...state,
        promptItem: action.prompt.promptItem }

    default:
      return state
  }
}

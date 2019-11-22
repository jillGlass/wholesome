import { RECEIVE_PROMPT } from '../actions'

const initialState = []

export default function prompt (state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROMPT:
      // console.log('reducer here')
      // console.log(action.prompt)
      return action.prompt

    default:
      return state
  }
}

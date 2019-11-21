import { REQUEST_PROMPT } from '../actions'

export default function promptRequest (state = false, action) {
  switch (action.type) {
    case REQUEST_PROMPT:
      return true
  }
}
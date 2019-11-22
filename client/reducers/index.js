import { combineReducers } from 'redux'

import prompt from './recievePrompt'
import waiting from './waiting'
import errorMessage from './errorMsg'

export default combineReducers({
  prompt,
  waiting,
  errorMessage
})

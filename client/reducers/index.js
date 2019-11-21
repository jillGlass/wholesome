import { combineReducers } from 'redux'

import recievePrompt from './recievePrompt'
import waiting from './waiting'
import errorMessage from './errorMsg'

export default combineReducers({
  recievePrompt,
  waiting,
  errorMessage
})

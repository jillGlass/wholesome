import { combineReducers } from 'redux'

import recievePrompt from './recievePrompt'
import promptRequest from './requestPrompt'
import errorMessage from './errorMsg'

export default combineReducers({
  recievePrompt,
  promptRequest,
  errorMessage
})

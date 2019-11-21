import request from 'superagent'

export const REQUEST_PROMPT = 'REQUEST_PROMPT'
export const RECEIVE_PROMPT = 'RECEIVE_PROMPT'
export const SHOW_ERROR = 'SHOW_ERROR'

export function fetchPrompts () {
  return (dispatch) => {
    dispatch(requestPrompt())
    return request
      .get('/api/v1/GETNAMEFROMSUNNYROMAN')
      .then(res => dispatch(receivePrompt(res.body)))
      .catch(err => { dispatch(showError(err.message)) })
  }
}

function requestPrompt () {
  return {
    type: REQUEST_PROMPT
  }
}

function receivePrompt (posts) {
  return {
    type: RECEIVE_PROMPT,
    posts: posts.map(post => post.data)
  }
}

function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

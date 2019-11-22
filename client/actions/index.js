import request from 'superagent'

export const REQUEST_PROMPT = 'REQUEST_PROMPT'
export const RECEIVE_PROMPT = 'RECEIVE_PROMPT'
export const SHOW_ERROR = 'SHOW_ERROR'

export function fetchPrompts (id) {
  // console.log('here, here fetchPrompts!!')
  return (dispatch) => {
    // console.log('Hi')
    dispatch(requestPrompt())
    return request
      .get(`/${id}`)
      .then(res => dispatch(receivePrompt(res.body)))
      .catch(err => { dispatch(showError(err.message)) })
  }
}

export function requestPrompt () {
  return {
    type: REQUEST_PROMPT
  }
}

export function receivePrompt (post) {
  return {
    type: RECEIVE_PROMPT,
    prompt: post
  }
}

export function showError (errorMessage) {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

import nock from 'nock'

import * as actions from '../client/actions/index'

test('fetchPrompts', () => {
  const scope = nock('http://localhost')
    .get('/1')
    .reply(200, { 'id': 1, 'promptItem': 'been kicked out of a bar' })

  const dispatch = jest.fn()

  return actions.fetchPrompts(1)(dispatch)
    .then(() => {
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0][0].type).toBe('REQUEST_PROMPT')
      expect(dispatch.mock.calls[1][0].type).toBe('RECEIVE_PROMPT')
      scope.done()
    })
})

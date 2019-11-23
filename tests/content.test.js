import React from 'react'
import { shallow } from 'enzyme'

import { Content } from '../client/components/Content'

test('<Content />', () => {
  const expected = 'I never been to America'
  const wrapper = shallow(<Content promptItem={'I never been to America'} />)
  expect(wrapper.text()).toMatch(expected)
})

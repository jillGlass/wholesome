import React from 'react'
import { shallow } from 'enzyme'

import Footer from '../client/components/Footer'

test('<Footer />', () => {
  const expected = 'HAVE I EVER'
  const wrapper = shallow(<Footer />)
  expect(wrapper.text()).toMatch(expected)
})

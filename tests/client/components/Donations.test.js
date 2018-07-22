import React from 'react'
import {Donations} from '../../../client/components/Donations'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

test('<Donations /> component has six buttons', () => {
  const expected = 6
  const testSubmitDonation = jest.fn()
  const wrapper = shallow(<Donations dispatch={testSubmitDonation} />)
  const actual = wrapper.find('button').length
  expect(actual).toEqual(expected)
})

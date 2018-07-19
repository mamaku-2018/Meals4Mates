import React from 'react'
import {Register} from '../../../../client/components/Auth/Register'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

test('<Register /> component has register 8 input fields', () => {
  const expected = 8
  const testFn = jest.fn()
  const wrapper = shallow(<Register dispatch={testFn} />)
  const actual = wrapper.find('input').length
  expect(actual).toEqual(expected)
})

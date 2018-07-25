import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {StoreInfo} from '../../../client/components/Store/StoreInfo'

configure({adapter: new Adapter()})

test('<StoreInfo />', () => {
  const match = {params: {id:1}}
  const expected = 1
  const testFn = jest.fn()
  const wrapper = shallow(<StoreInfo getStoreInfo={testFn} clearError={testFn} match={match} />)
  const actual = wrapper.find('div').length
  expect(actual).toEqual(expected)
})

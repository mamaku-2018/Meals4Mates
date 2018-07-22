import React from 'react'
import {CompanyList} from '../../../client/components/CompanyList'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

test('<CompanyList /> component has a table', () => {
  const expected = 1
  const testgetAllStoreStats = jest.fn()
  const wrapper = shallow(<CompanyList dispatch={testgetAllStoreStats} />)
  const actual = wrapper.find('table').length
  expect(actual).toEqual(expected)
})
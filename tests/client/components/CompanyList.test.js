import React from 'react'
import {CompanyList} from '../../../client/components/Admin/CompanyList'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

// create initial state
const initialState = {
  getAllStoreStats: [
    {id: 1, store: 'store 1'},
    {id: 2, store: 'store 2'}
  ]
}
const mockStore = configureStore([thunkMiddleware])
let store

configure({adapter: new Adapter()})

test('<CompanyList /> component has a table', () => {
  store = mockStore(initialState)
  const expected = 1
  const testgetAllStoreStats = jest.fn()
  const wrapper = mount(<Provider store={store}><CompanyList getAllStoreStats={testgetAllStoreStats} /></Provider>)
  const actual = wrapper.find('table').length
  expect(actual).toEqual(expected)
})

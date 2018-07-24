import React from 'react'
import {Register} from '../../../../client/components/Auth/Register'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

//create initial state
const initialState = {
  getAllStoreStats: [
    {id: 1, store: 'store 1'},
    {id: 2, store: 'store 2'}
  ]
}
const mockStore = configureStore([thunkMiddleware])
let store

configure({adapter: new Adapter()})

test('<Register /> component has register 8 input fields', () => {
  store = mockStore(initialState)
  const expected = 9
  const testFn = jest.fn()
  const wrapper = mount(<Provider store={store}><Register /></Provider>)
  const actual = wrapper.find('input').length
  expect(actual).toEqual(expected)
})

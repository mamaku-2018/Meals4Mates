import React from 'react'
import {Donations} from '../../../client/components/Donations'
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

test('<Donations /> component has six buttons', () => {
  store = mockStore(initialState)
  const expected = 6
  const testSubmitDonation = jest.fn()
  const wrapper = mount(<Provider store={store}><Donations dispatch={testSubmitDonation} /></Provider>)
  const actual = wrapper.find('button').length
  expect(actual).toEqual(expected)
})

import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StoreInfo from '../../../client/components/Store/StoreInfo'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const initialState = {
  userDetails: {
    name: 'Test store',
    address: '123 Test St',
    city: 'Test city',
    suburb: 'Test suburb',
    owner: 'Test user',
    phone: '022233444',
    email: 'email@email.com'
  }
}
const mockStore = configureStore([thunkMiddleware])
let store

configure({adapter: new Adapter()})

test('<StoreInfo />', () => {
  store = mockStore(initialState)
  const match = {params: {id: 1}}
  const expected = 'Contact:'
  const wrapper = mount(<Provider store={store}><StoreInfo match={match} /></Provider>)
  const actual = wrapper.find('h5').text()

  expect(actual).toEqual(expected)
})

import React from 'react'
import {configure, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import StoreInfo from '../../../client/components/Store/StoreInfo'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import configureStore from 'redux-mock-store'

const initialState = {
  userDetails: [
    name: 'Test user',
    address: '123 Test St',
    suburb:
  ]
}
import React from 'react'
import {Route} from 'react-router-dom'

import Banner from './Banner'
import Locations from './Locations'
import Advertising from './Advertising'

const Home = () => {
  return (
    <div className='main-container'>
      <div className='columns'>

        <div className='column'>
          <Route path='/' component={Banner} />
          <Route path='/' component={Locations} />
          <Route path='/' component={Advertising} />
        </div>
      </div>
    </div>
  )
}

export default Home

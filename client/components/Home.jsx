import React from 'react'

import Banner from './Banner'
import Locations from './Locations'
import Advertising from './Advertising'

const Home = () => {
  return (
    <div className='main-container'>
      <div className='columns'>

        <div className='column'>
          <Banner />
          <Locations />
          <Advertising />
        </div>
      </div>
    </div>
  )
}

export default Home

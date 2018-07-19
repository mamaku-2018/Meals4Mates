import React from 'react'
import {HashRouter as Route, Link} from 'react-router-dom'

import {StoreInfo} from './StoreInfo'
// import {StorePie} from './StorePie'
// import {StoreStats} from './StoreStats'
import {StoreInfoEdit} from './StoreInfoEdit'

const StoreProfile = () => {
  return (
    <div className='storeprofile'>
      <h2>Your Store Stats</h2>
      <div className='StoreInfo'>
        <Link to='/store/:id/edit' className='button'>Edit</Link>
      </div>

      <Route exact path='/store/:id' component={StoreInfo} />
      {/* <Route path='/store/:id' component={StorePie} /> */}
      {/* <Route path='/store/:id' component={StoreStats} /> */}
      <Route path='/store/:id/edit' component={StoreInfoEdit} />

    </div>
  )
}

export default StoreProfile

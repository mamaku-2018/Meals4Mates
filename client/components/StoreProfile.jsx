import React from 'react'
import {Route} from 'react-router-dom'

import StoreInfo from './StoreInfo'
import StoreBalance from './StoreBalance'
// import {StoreStats} from './StoreStats'
import StoreInfoEdit from './StoreInfoEdit'

const StoreProfile = () => {
  return (
    <div className='storeprofile'>
      <h2>Your Store Stats</h2>
      {/* <StoreInfo /> */}
      <Route exact path='/store/:id' component={StoreInfo} />
      <Route path='/store/:id' component={StoreBalance} />
      {/* <Route path='/store/:id' component={StoreStats} /> */}
      <Route path='/store/:id/edit' component={StoreInfoEdit} />

    </div>
  )
}

export default StoreProfile

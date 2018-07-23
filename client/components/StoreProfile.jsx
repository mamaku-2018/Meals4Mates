import React from 'react'
import {Route, Switch} from 'react-router-dom'
import StoreInfo from './StoreInfo'
import StoreBalance from './StoreBalance'
import StoreStats from './StoreStats'
import StoreInfoEdit from './StoreInfoEdit'
import StoreRedemption from './StoreRedemption'

const StoreProfile = (props) => {
  return (
    <div className='storeprofile'>
      <h2>Your Donations</h2>
      <Switch>
        <Route exact path='/store/:id/edit' component={StoreInfoEdit} />
        <Route path='/store/:id' component={StoreInfo} />
      </Switch>
      <Switch>
        <Route path='/store/:id/redeem' component={StoreRedemption} />
        <Route path='/store/:id' component={StoreBalance} />
      </Switch>
      <Route path='/store/:id' component={StoreStats} />
    </div>
  )
}

export default StoreProfile

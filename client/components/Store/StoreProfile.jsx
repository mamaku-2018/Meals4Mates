import React from 'react'
import {Route, Switch} from 'react-router-dom'
import StoreInfo from './StoreInfo'
import StoreBalance from './StoreBalance'
import StoreRedemption from './StoreRedemption'
import StoreInfoEdit from './StoreInfoEdit'

const StoreProfile = (props) => {
  return (
    <div className='storeprofile'>
      <Switch>
        <Route path='/store/:id/edit' component={StoreInfoEdit} />
        <Route path='/store/:id' component={StoreInfo} />
      </Switch>
      <Switch>
        <Route path='/store/:id/redeem' component={StoreRedemption} />
        <Route path='/store/:id' component={StoreBalance} />
      </Switch>

    </div>
  )
}

export default StoreProfile

import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const StoreBalance = () => {
  return (

    <div className='store-balance'>
      <div className='redeem'>
        <Link to='/store/redeem' className='button'>Redeem</Link>
      </div>

      <p>Total Store Balance </p>
      {/* need to write reducer and actions to call total into state */}
      <p>$100</p>

      <div className='donation'>
        <Link to='/store/donation' className='button'>Donate</Link>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    storeTotal: state.storeTotal
  }
}

export default connect(mapStateToProps, null)(StoreBalance)

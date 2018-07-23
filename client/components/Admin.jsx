import React from 'react'
import TotalStats from './TotalStats'
import Locations from './Locations'
import CompanyList from './CompanyList'

const Admin = () => {
  return (
    <div className='Admin'>
     
      <div className='admin-top'>
        <h2>Store Statistics</h2>
        <TotalStats />
        <Locations />
      </div>
      <CompanyList />
    </div>
  )
}

export default Admin

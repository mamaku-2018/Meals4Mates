import React from 'react'
import TotalStats from './TotalStats'
import Locations from './Locations'
import CompanyList from './CompanyList'

const Admin = () => {
  return (
    <div className='Admin'>
      <TotalStats />
      <Locations />
      <CompanyList />
    </div>
  )
}

export default Admin

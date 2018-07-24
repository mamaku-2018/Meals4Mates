import React from 'react'
import TotalStats from './TotalStats'
import Locations from './Locations'
import CompanyList from './CompanyList'
import AdminStats from './AdminStats';

const Admin = () => {
  return (
    <div className='Admin'>
      <div className='admin-top'>
        <h2>Store Statistics</h2>
        <TotalStats />
        <Locations />
      </div>
      <CompanyList />
      <AdminStats />
    </div>
  )
}

export default Admin

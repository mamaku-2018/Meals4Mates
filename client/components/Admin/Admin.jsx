import React from 'react'
import TotalStats from './TotalStats'
import Locations from '../Locations'
import CompanyList from './CompanyList'
import AdminStats from './AdminStats'

const Admin = () => {
  return (
    <div className='admin'>
      <div className='admin-top'>
        <TotalStats />
        <Locations />
      </div>
      <CompanyList />
      <AdminStats />
    </div>
  )
}

export default Admin

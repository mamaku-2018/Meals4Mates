import React from 'react'
import {TotalStats} from '../components/TotalStats'
import {Locations} from '../components/Locations'
import {CompanyList} from '../components/CompanyList'

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

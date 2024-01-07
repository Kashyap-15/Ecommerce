import React from 'react'
import "./Admin.css"
import AdminLeftSidebar from './AdminComponents/AdminLeftSideBar/AdminLeftSidebar'
import AdminRightSidebar from './AdminComponents/AdminRightSidebar/AdminRightSidebar'

export default function Admin() {
  return (
    <div className='adminMain'>
        <AdminLeftSidebar/>
        <AdminRightSidebar/>
    </div>
  )
}

import React from 'react'
import "./Admin.css"
import AdminLeftSidebar from './AdminComponents/AdminLeftSideBar/AdminLeftSidebar'
import RouterCom from '../../02Router/RouterCom'

export default function Admin() {
  return (
    <div className='adminMain'>
        <AdminLeftSidebar/>
        <RouterCom/>
    </div>
  )
}

import React from 'react'
import "./AdminLeftSidebar.css"
import { AnalyticsOutlined, AnimationOutlined, HelpOutlineOutlined, Home, HomeOutlined, Inventory2Outlined, Logout, LogoutOutlined, ManageAccountsOutlined, PeopleAltOutlined, SettingsOutlined } from '@mui/icons-material'

export default function AdminLeftSidebar() {
  return (
    <div className='adminLeftSidebar'>
        <div className="leftSidebarLogo">
            <img className='sidebarLogoImg' src="HomeImg/boAt_logo.svg" alt="" />
        </div>
        
        <div className="leftSidebarContent">
            <ul className="leftSidebarUl">
                <li className="leftSidebarLi"><span><HomeOutlined fontSize='small'/></span> Home</li>
                <li className="leftSidebarLi"><span><Inventory2Outlined fontSize='small'/></span> Products</li>
                <li className="leftSidebarLi"><span><PeopleAltOutlined fontSize='small'/></span> Users</li>
                <li className="leftSidebarLi"><span><AnalyticsOutlined fontSize='small'/></span> Analytics</li>
                <li className="leftSidebarLi"><span><AnimationOutlined fontSize='small'/></span> Explore</li>
            </ul>
            <label htmlFor="" className='leftSidebarTools'>Tools</label>
            <ul className="leftSidebarUl">
                <li className="leftSidebarLi"><span><SettingsOutlined fontSize='small'/></span> Setting</li>
                <li className="leftSidebarLi"><span><HelpOutlineOutlined fontSize='small'/></span> Help</li>
                <li className="leftSidebarLi"><span><ManageAccountsOutlined fontSize='small'/></span> Manage User</li>
            </ul>
        </div>

        <div className="leftSidebarFooter">
        <ul className="leftSidebarUl">
            <li className="leftSidebarLogLi"><span className='SidebarLogoutIcon'><LogoutOutlined fontSize='small'/></span> Logout</li>
        </ul>
        </div>
    </div>
  )
}

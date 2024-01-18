import React from 'react'
import "./AdminLeftSidebar.css"
import { AnalyticsOutlined, AnimationOutlined, HelpOutlineOutlined, Home, HomeOutlined, Inventory2Outlined, Logout, LogoutOutlined, ManageAccountsOutlined, PeopleAltOutlined, SettingsOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../../../../01Redux/Feature/Auth/AuthSlice'
import { toast } from 'react-toastify'

export default function AdminLeftSidebar() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler =()=>{
        if(confirm("Are you logging out, boAthead?")){
            dispatch(logout())
            navigate("/")
            toast.success("Logout Successful",{
                theme:"dark"
            })
        }
    }

  return (
    <div className='adminLeftSidebar'>

            <NavLink to={"/admin"}>
        <div className="leftSidebarLogo">
            <img className='sidebarLogoImg' src="HomeImg/boAt_logo.svg" alt="" />
        </div>
            </NavLink>
        
        <div className="leftSidebarContent">
            <ul className="leftSidebarUl">
            <NavLink to={"/admin"} className="navlinkDiv">
                <li className="leftSidebarLi"><span><HomeOutlined fontSize='small'/></span> Home</li>
            </NavLink>
                <NavLink to={"/admin-products"} className="navlinkDiv">
                <li className="leftSidebarLi"><span><Inventory2Outlined fontSize='small'/></span> Products</li>
                </NavLink>
                <NavLink to={"/admin-users"} className="navlinkDiv">
                <li className="leftSidebarLi"><span><PeopleAltOutlined fontSize='small'/></span> Users</li>
                </NavLink>
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
            <li className="leftSidebarLogLi" onClick={()=>logoutHandler()}><span className='SidebarLogoutIcon'><LogoutOutlined fontSize='small'/></span> Logout</li>
        </ul>
        </div>
    </div>
  )
}

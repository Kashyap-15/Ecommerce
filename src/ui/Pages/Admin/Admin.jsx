import React from 'react'
import "./Admin.css"
import AdminInfoBar from '../../Components/AdminInfoBar/AdminInfoBar'
import Chart from '../../Components/Chart/Chart'
import { userdata } from '../../../../DummyData'
import { NavLink } from 'react-router-dom'
import { Add, BorderColor, Dashboard, People, Settings, Storage } from '@mui/icons-material'


export default function Admin() {
  return (
    <>
      <div className='admin'>
        <div className='adminLeftSide'>
          <div className="lists">
            <NavLink className='list' to={"/"}>
            <div><span><Dashboard/></span> Dashboard</div>
            </NavLink >
            <NavLink className='list' to={"/products"}>
            <div><span><Storage/></span> Products</div>
            </NavLink>
            <NavLink className='list' to={"/users"}>
            <div> <span><People/></span> Users</div>
            </NavLink>
            <NavLink className='list'>
            <div> <span><BorderColor/></span> orders</div>
            </NavLink>
            <NavLink className='list'>
            <div> <span><Settings/></span> Account Settings</div>
            </NavLink>
          </div>
        </div>
        <div className='adminRightSide'>
          <h2 className='dashBoardTitle'>DashBoard</h2>
          <AdminInfoBar />
          <Chart datas={userdata} title={"User Analytics"} datakey={"Active_User"} grid />
        </div>
      </div>
    </>
  )
}

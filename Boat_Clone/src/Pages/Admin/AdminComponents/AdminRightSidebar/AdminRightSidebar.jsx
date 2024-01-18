import React from 'react'
import "./AdminRightSidebar.css"
import {  ArrowDropDownOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import PriceCard from './PriceCard'
import AdminChart from '../AdminChart/AdminChart'
import { StateSalesData } from '../../../../../DataForImages'
import { useSelector } from 'react-redux'

export default function AdminRightSidebar() {
  const user = useSelector((state)=>state.authReducer.user)

  return (
    <div className='adminRightSidebar'>
        <div className="rightSidebarHeader">

          <div className="rightSidebarHeaderTitle">
            <h1 className="sidebarHeading">
              Welcome Back, bo<span style={{color:"#ff0000"}}>A</span>thead!
            </h1>
            <h5 className="sidebarSubheading">
              Here's What Happening with your store today
            </h5>
          </div>

          <div className="rightSidebarHeaderIcons">
            <span className="sidebarSearchIcon"><SearchOutlined/></span>
            <span className="sidebarSearchIcon"><NotificationsNoneOutlined/></span>
              <div className="sidebarUserIcon">
                <img src="AdminImg/EmptyUser.jpeg" alt="re" />
                <span>{user.email}</span>
                <span><ArrowDropDownOutlined/></span>
              </div>
          </div>
          
        </div>

        <div className="rightSidebarMain">
          <div className="rigthSidebarLeft">
            <div className="rigthSidebarTitle">
              <PriceCard price="307.40k" percentage="+30%" title="Total Customers" bg="#bce0ff"/>
              <PriceCard price="₹30.40k" percentage="+53%" title="Total Revenue" bg="#dbfed6"/>
              <PriceCard price="2.49k" percentage="+23%" title="Total Deals" bg="#e0dffe"/>
            </div>
            <div className="rightSidebarChartDiv">
              <AdminChart/>
            </div>
          </div>
          <div className="rightSidebarRight">
            <label htmlFor="" className='rightSidebarSatesTitle'>Statewise Sales Analytics</label>
            <ul className="rightSidebarStateUl">
              {
                StateSalesData.map((ele,i)=>{
                  return <li key={i} className="rightSidebarStateLi">
                  <span>{ele.state}</span>
                  <span>{ele.change}</span>
                </li>
                })
              }
            </ul>
          </div>
        </div>
    </div>
  )
}

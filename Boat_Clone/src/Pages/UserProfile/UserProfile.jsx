import React from 'react'
import "./UserProfile.css"
import { Inventory, Logout, Place, West } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../01Redux/Feature/Auth/AuthSlice'
import { toast } from 'react-toastify'

export default function UserProfile() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let userData = useSelector((state) => state.authReducer?.user)

    const logoutHandler=()=>{
        if(confirm("Are you sure?")){
            dispatch(logout())
            navigate("/")
            toast.success("Logout Successful")
        }
    }
  return (
    <div className='userProfile'>
        <div className="userProfileDiv">
            <h1 className='userProfileMainTitle'><span onClick={()=>navigate("/")}><West fontSize='large'/></span>My account</h1>
            <div className="userProfileDetails">
                <div className="userProfileImgDiv">
                    <span className='profileImg'>KP</span>
                </div>
                <div className="userProfileCred">
                    <h3 className='userName'>Kashyap Patel</h3>
                    <span className='userEmail'>{userData.email}</span>
                    <span className='userPhoneNumber'>+918306726903</span>
                    <span className='userEmail'>{userData.userType}</span>
                </div>
            </div>
            <hr />
            <div className='userProfileAddress'>
                <div className="userProfileAddressDiv">
                    <span className='profileAddress'>home</span>
                </div>
                <div className="userProfileEmailDiv">
                    <span className='userAdress'>E-301, Swayam residency, Olpad road jahangirpura, , SURAT, 395005, Gujarat</span>
                </div>
            </div>
            <hr />
            <div className="UserProfileManage">
                <div className="userProfileManageDiv">
                    <span><Place fontSize='medium'/></span>
                    <span>Manage Address</span>
                </div>
                <span> | </span>
                <div className="userProfileManageDiv">
                    <span><Inventory fontSize='medium'/></span>
                    <span>My Orders</span>
                </div>
            </div>
            <hr />
            <div className="UserProfileManage">
                <button className='userProfileLogOut' onClick={logoutHandler}><Logout/>Logout</button>
            </div>
        </div>
    </div>
  )
}

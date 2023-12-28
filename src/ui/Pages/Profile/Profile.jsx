import React from 'react'
import "./Profile.css"
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/Feature/Auth/Auth'
import { useNavigate } from 'react-router-dom'
import { Person2 } from '@mui/icons-material'

export default function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.authReducer.user)

  const logOutHandler = () => {
    dispatch(logout())
    navigate("/login")
  }
  return (
    <>
      <div className='profile'>
        <div className="mainDiv d-flex align-align-items-center justify-content-between mt-3">
          <h2><Person2 /><span>My Profile</span></h2>
          <span><Button color='error' variant='outlined'>Edit Profile</Button></span>
        </div>
        <div className="details d-flex align-items-center justify-content-evenly mt-4">
          <div className="imgdiv">
            <img className='img mt-3' src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D" alt="" />
            <h4>Balance : 500$</h4>
            <Button variant="contained" className='logoutBtn ms-5' onClick={logOutHandler} >
              LogOut
            </Button>
          </div>
          <div className='d-flex gap-5 flex-column'>
            <div className="userTypediv">
              <h4><span>User Type:</span> </h4>
              <h4>{userData.userType}</h4>
            </div>
            <div className="useremaildiv">
              <h4><span>Email: </span> </h4>
              <h4>{userData.email}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

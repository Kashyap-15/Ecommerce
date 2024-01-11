import axios from 'axios'
import React, { useState } from 'react'
import { BE_URL } from '../../../DataForImages'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../01Redux/Feature/Auth/AuthSlice'
import { toast } from 'react-toastify'

export default function Register({setShow}) {
  const [registerData, setRegisterData] = useState({
    address:{
      street:"", // using address varible because there is lack of varibles in API, so using address for full Name.
    },
    email:"",
    password:"",
    conPassword:"",
  })
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const submithandler= (e) => {
    e.preventDefault()
    let UserData = {
      ...registerData
    }
    console.log("🚀 ~ file: Register.jsx:21 ~ submithandler ~ UserData:", UserData.address.street)
    axios({
      method:"post",
      url:`${BE_URL}/user/signUp`,
      data:UserData,
    }).then((resData)=>{
      dispatch(login(resData.data))
      toast.success("Now you are a boAthead",{
        theme:'dark',
      })
      navigate("/")
      setShow(false)
    }).catch((err)=>{
      toast.error(err.message)
    })

    setRegisterData({
      address:{
        street:"",
      },
      email:"",
      password:"",
      conPassword:"",
    })
  }
  return (
    <div className='register'>
        <form action="#">
      <div className="loginForm">
        <div className="loginInput">
          <label className='loginLable' htmlFor="">Enter Your Name</label>
          <input className='loginInputBar' type="text" placeholder='First Name Last Name'
            value={registerData.address.street}
            onChange={(e)=>setRegisterData({...registerData,address:{...registerData.address,street:e?.target?.value}})}
            />
        </div>
        <div className="loginInput">
          <label className='loginLable' htmlFor="">Enter Your Email</label>
          <input className='loginInputBar' type="email" placeholder='EmailAddress@gmail.com' 
            value={registerData.email}
            onChange={(e)=>setRegisterData({...registerData,email:e?.target?.value})}
            />
        </div>
        <div className="loginInput">
          <label className='loginLable' htmlFor="">Enter Your Password</label>
          <input className='loginInputBar' type="Password" placeholder='Password@123'
            value={registerData.password}
            onChange={(e)=>setRegisterData({...registerData,password:e?.target?.value})}
            />
        </div>
        <div className="loginInput">
          <label className='loginLable' htmlFor="">Confirm Your Password</label>
          <input className='loginInputBar' type="Password" placeholder='Password@123'
            value={registerData.conPassword}
            onChange={(e)=>setRegisterData({...registerData,conPassword:e?.target?.value})}
          />
        </div>
        <div className="loginButtonDiv" onClick={(e)=>submithandler(e)}>
          <span className='LoginButton'>Register</span>
        </div>
      </div>
      </form>
    </div>
  )
}

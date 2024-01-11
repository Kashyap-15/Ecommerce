import React, { useState } from 'react'
import "./LoginCom.css"
import axios from 'axios'
import { BE_URL } from '../../../DataForImages'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../01Redux/Feature/Auth/AuthSlice'

export default function LoginCom({setShow}) {
  let [loginData, setLoginData] = useState({
    email:"",
    password:"",
  })

  let dispatch = useDispatch()
  let navigate = useNavigate()

  const submithandler= (e) => {
    e.preventDefault()
    axios({
      method:"post",
      url:`${BE_URL}/user/signin`,
      data:loginData,
    }).then((resData)=>{
      dispatch(login(resData?.data))
      if(resData?.data?.data?.userType === "admin"){
        toast.success("Login Successfull",{
          theme:'dark'
        })
        navigate("/admin")
        setShow(false)
      }
      else{
        toast.success("Login Successfull",{
          theme:'dark'
        })
        navigate("/")
        setShow(false)
      }
    }).catch((err)=>{
      toast.error(err.message)
    })
  }


  return (
    <div className='login'>
      <form action="#">
      <div className="loginForm">
        
        <div className="loginInput">
          <label className='loginLable' htmlFor="">Enter Your Email</label>
          <input className='loginInputBar' type="email" placeholder='EmailAddress@gmail.com'
          value={loginData.email}
          onChange={(e)=>setLoginData({...loginData,email:e?.target.value})}
          />
        </div>
        <div className="loginInput">
          <label className='loginLable' htmlFor="">Enter Your Password</label>
          <input className='loginInputBar' type="Password" placeholder='Password@123'
           value={loginData.password}
           onChange={(e)=>setLoginData({...loginData,password:e?.target.value})} />
        </div>
        <div className="loginButtonDiv" onClick={(e)=>submithandler(e)}>
          <span className='LoginButton'>Log In</span>
        </div>
      </div>
      </form>
    </div>

  )
}

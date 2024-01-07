import React, { useState } from 'react'
import "./Login.css"
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Facebook, Google, Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../../../redux/Feature/Auth/Auth';
import { toast } from 'react-toastify';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email:"",
    password:"",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {event.preventDefault()};

  const submitHandler = (e)=>{
    e.preventDefault();
    
    axios({
      method:"post",
      url:"http://localhost:9999/user/signin",
      data:user,
    })
    .then((resData)=>{
      dispatch(login(resData?.data));
      if(resData?.data?.data.userType === "customer"||"admin"){
        toast.success("Login Success..")
        navigate("/");
      }
    })
    .catch((err)=>{
      console.log("---->Login Error",err);
      toast.error("Email and Password is Not available, Please Sign Up")
    })
  }


  return (
    <div className='login'>
      <div className="loginContainer">
        <div className='loginTitle'>
          <h1 className='loginHeader'>Welcome to Bonik Ecommerce</h1>
          <p className="loginSubTitle">Log in with Email & Password</p>
        </div>
        <div className="loginForm">
          <Box sx={{textAlign:"center" }}>
            <TextField
              label=" Email"
              id="outlined-start-adornment"
              placeholder='abc@gmail.com'
              sx={{ m: 1, width: '80%' }}
              value={user.email}
              onChange={(e)=>setUser({...user,email:e?.target?.value})}
            />
            <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder='Abc@unique1'
                type={showPassword ? 'text' : 'password'}
                value={user.password}
                onChange={(e)=>setUser({...user,password:e?.target?.value})}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Box>
          <Button variant="contained" className='logInBtn' onClick={submitHandler} >
            LogIn
          </Button>
          <div className="loginFooter">
            <span className='forgotpassword'>Forgot Your Password? <span className='reset'>Reset it</span></span>
          </div>
        </div>
        <div className="divider">
          <hr />
        </div>
        <div className="loginWithOther">
          <button className='facebook'>
          <Facebook className='facbookIcon'/>
          continue With Facebook
          </button>
          <button className='google'>
          <Google className='googleIcon'/>
          continue With Google
          </button>
          <span className='account'>Do not have Account? 
            <NavLink to={"/register"} className='signup'>
            Sing Up
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  )
}

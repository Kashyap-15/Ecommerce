import React, { useState } from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import { Facebook, Google, Password, Visibility, VisibilityOff } from '@mui/icons-material'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import "./Register.css"
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/Feature/Auth/Auth'


export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({
    FullName:"",
    email:"",
    password:"",
    ConPassword:"",
  })

  const dispatch = useDispatch();
  const navigate = useNavigate()


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {event.preventDefault();};

  const submitHandler = (e)=>{
    e.preventDefault()
    if(newUser.password !== newUser.ConPassword){
      toast.error("Password and confirm password is not same");
    }
    else
    {
      let apiData = {
        ...newUser
      }
      axios({
        method:"post",
        url:"http://localhost:9999/user/signUp",
        data:apiData,
      })
      .then((resData)=>{
        dispatch(login(resData.data))
        toast.success("Register Success")
        navigate("/");
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    setNewUser({
      FullName:"",
      email:"",
      password:"",
      ConPassword:"",
    })
  }
  return (
    <div className='login'>
      <div className="loginContainer">
        <div className='loginTitle'>
          <h1 className='loginHeader'>Create Your Bonik Account</h1>
          <p className="loginSubTitle">sign up with Email Or Mobile</p>
        </div>
        <div className="loginForm">
          <Box sx={{textAlign:"center" }}>
            <TextField
              type='text'
              label=" Full Name"
              id="outlined-start-adornment"
              placeholder='First Name --- Last Name'
              sx={{ m: 1, width: '80%' }}
              value={newUser.FullName}
              onChange={(e)=>setNewUser({...newUser,FullName:e.target.value})}
            />
             <TextField
              type='text'
              label=" Email or Phone Number"
              id="outlined-start-adornment"
              placeholder='abc@gmail.com'
              sx={{ m: 1, width: '80%' }}
              value={newUser.email}
              onChange={(e)=>setNewUser({...newUser,email:e.target.value})}
            />
           <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder='Abc@unique1'
                type={showPassword ? 'text' : 'password'}
                value={newUser.password}
                onChange={(e)=>setNewUser({...newUser,password:e.target.value})}
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
            <FormControl sx={{ m: 1, width: '80%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                placeholder='Abc@unique1'
                type={showPassword ? 'text' : 'password'}
                value={newUser.ConPassword}
                onChange={(e)=>setNewUser({...newUser,ConPassword:e.target.value})}
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
          <div className="loginFooter">
            <span className='forgotpassword'>By signing up, you agree to
<span className='reset'>Terms & Conditions</span></span>
          </div>
          <Button variant="contained" className='logInBtn' onClick={submitHandler} >
            Create Account
          </Button>
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
          {/* <span className='account'>Do You have Account? 
            <NavLink to={"/login"} className='signup'>
            Log In
            </NavLink>
          </span> */}
        </div>
      </div>
    </div>
  )
}

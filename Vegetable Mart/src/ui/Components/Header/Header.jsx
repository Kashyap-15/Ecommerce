import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Cart from '../SideCart/SideCart';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const users = useSelector((state)=>state.authReducer)
  const CartCount = useSelector((state)=>state.cartReducer)

  const cartToggleOpen = () => {
    setIsOpen(true)
  }
  const cartToggleCLose = (action) => {
    setIsOpen(action)
  }

  return (
    <>
      <div className='header'>
        <div className="headerContainer">
          <div className="headerLogo">
            <NavLink to={"/"}>
              <img src="/assets/logo.svg" alt="Logo Img" />
            </NavLink>
          </div>
          <div className="headerInput">
            <div className="inputDiv">
              <SearchOutlinedIcon className="searchIcon" />
              <input type="text" className='input' placeholder='Enter the Text Here' />
              <div className='headerBtn'>Search</div>
            </div>
          </div>
          <div className="headerRightUser">
            <div className="headerUserIcon">
              {
                JSON.stringify(users.user)==="{}" ? <NavLink to={"/login"} >
                <div className="userIcon">
                  <PersonOutlineIcon />
                </div>
                </NavLink>:
                <NavLink to={"/profile"}>
                <div className="userIcon">
                  <PersonOutlineIcon />
                </div>
                </NavLink>
              }
              <div className="cartIcon" onClick={cartToggleOpen}>
                <ShoppingCartOutlinedIcon />
                <div className="cartCount">{CartCount.cartFullDetails.length||0}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && <Cart action={cartToggleCLose} />}
    </>
  )
}

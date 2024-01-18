import React, { useState } from 'react'
import "./Header.css"
import { AccountBox, KeyboardArrowDown, Person, Search, ShoppingBag,} from '@mui/icons-material'
import { CategoriesData } from '../../../DataForImages'
import Modals from '../Modal/Modals'
import OffCanvas from '../Offcanvas/Offcanvas'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export default function Header() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  const isUser = useSelector((state)=>state.authReducer?.user)
  const navigate = useNavigate()



  return (
    <div className='headerMain' >
      <div className="header">
        <NavLink to={"/"}>
        <div className="headerLogo">
          <img className='logoImg' src="/HomeImg/boAt_logo.svg" alt="" />
        </div>
        </NavLink>
        <div className="headerNavbar">
          <ul className="headerUl">
            <li className='headerLi'>Categories <span><KeyboardArrowDown /></span>
              <ul className="CategoriesUl">
                <li className='CategoriesSquare'> </li>
                {
                  CategoriesData.map((ele,i)=>{
                    return <NavLink  key={i} to={"all-products"} style={{textDecoration:"none"}}>
                    <li className='Categoriesli'><img className='CategoriesImg' src={ele.img} alt={ele.name} /><span className='categoriesContent'>{ele.name}</span></li>
                    </NavLink> 
                  })
                }
              </ul>
            </li>
            <NavLink to={"/boat-truly-yours"} className='headerLi'>
            <li>boAt Truly Yours</li>
            </NavLink>
            <NavLink to={"/gift-with-boat"} className='headerLi'>
            <li>Gift with boAt</li>
            </NavLink>
            <NavLink to={"/corporate-orders"} className='headerLi'>
            <li>Corporate Orders</li>
            </NavLink>
          </ul>
        </div>
        <div className="headerRight">
          <div className="headerSearch">
            <Search fontSize='small' />
            <input type="text" placeholder='Search Any Products' className='scrollingPlaceholder' />
          </div>
          <div className='HeaderIcons'>
            
            {
              isUser.userType ? <div onClick={()=>navigate("/user-profile")}>
              <AccountBox fontSize='medium' />
              </div> : <div onClick={()=>setShow(true)}>
              <Person fontSize='medium' />
              </div>
            }
            <div onClick={()=> setToggle(!toggle)} >     
            <ShoppingBag fontSize='medium' />
            </div>
            <Modals show={show} setShow={setShow}/>
            <OffCanvas toggle={toggle} setToggle={setToggle}/>
          </div>
        </div>
      </div>
    </div>
  )
}

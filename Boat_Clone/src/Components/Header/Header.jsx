import React, { useState } from 'react'
import "./Header.css"
import { KeyboardArrowDown, Person, Search, ShoppingBag,} from '@mui/icons-material'
import { CategoriesData } from '../../../DataForImages'
import Modals from '../Modal/Modals'
import OffCanvas from '../Offcanvas/Offcanvas'
import { NavLink } from 'react-router-dom'



export default function Header() {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <div className='headerMain'>
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
                    return <li key={i} className='Categoriesli'><img className='CategoriesImg' src={ele.img} alt={ele.name} /><span className='categoriesContent'>{ele.name}</span></li>
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
            <div onClick={()=>setShow(true)}>
            <Person fontSize='medium' />
            </div>
            <div onClick={()=>setToggle(true)} >     
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

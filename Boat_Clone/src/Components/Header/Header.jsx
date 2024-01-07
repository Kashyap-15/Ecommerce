import React, { useState } from 'react'
import "./Header.css"
import { KeyboardArrowDown, Person, Search, ShoppingBag,} from '@mui/icons-material'
import { CategoriesData } from '../../../DataForImages'
import Modals from '../Modal/Modals'



export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <div className='headerMain'>
      <div className="header">
        <div className="headerLogo">
          <img className='logoImg' src="/HomeImg/boAt_logo.svg" alt="" />
        </div>
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
            <li className='headerLi'>boAt Truly Yours</li>
            <li className='headerLi'>Gift with boAt</li>
            <li className='headerLi'>Corporate Orders</li>
          </ul>
        </div>
        <div className="headerRight">
          <div className="headerSearch">
            <Search fontSize='small' />
            <input type="text" placeholder='Search Any Products' className='scrollingPlaceholder' />
          </div>
          <div className='HeaderIcons'>
            <div onClick={()=>setShow(true)}>
            <Person fontSize='large' />
            </div>
            <div>     
            <ShoppingBag fontSize='large' />
            </div>
            <Modals show={show} setShow={setShow}/>
          </div>
        </div>
      </div>
    </div>
  )
}

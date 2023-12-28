import React from 'react'
import "./Home.css"
import HeroSection from '../../Components/HeroSection/HeroSection'
import Products from '../../Components/Products/Products'
import Footer from '../../Components/Footer/Footer'
import Admin from '../Admin/Admin'

export default function Home() {
  let Type = JSON.parse(localStorage.getItem("user")) || ""
  return (
    <div className='home'>
      {
        Type.userType==="admin" || "" ? 
        <Admin/>
        :
        <>
         <HeroSection/>
        <Products/>
       </>
      }
        <Footer/>
    </div>
  )
}

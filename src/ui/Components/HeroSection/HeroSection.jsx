import React from 'react'
import "./HeroSection.css"
import { AssuredWorkload, LocalShipping, ShutterSpeed, WorkspacePremium } from '@mui/icons-material'

export default function HeroSection() {
  return (
    <>
    <div className='heroSection'>
        <div className="heroContentContainer">
          <h1 className='heroContent'>Get your grocery delivery
          within 30 minutes</h1>
          <div className='heroparent'>
          <input type="text" placeholder='Searching for....' className='heroInput' />
          <button className='heroBtn'>Search</button>
          </div>
        </div>
    </div>
    <div className='block'>
      <div className="blockContainer">
        <div className="blockIcon">
          <LocalShipping fontSize='large'/>
        </div>
        <div className="blockContent">
          <h4>Fast Delivery</h4>
          <h4>Start from 10$</h4>
        </div>
      </div>

      <div className="blockContainer">
        <div className="blockIcon">
          <WorkspacePremium fontSize='large'/>
        </div>
        <div className="blockContent">
          <h4>Money Guarantee</h4>
          <h4>7 Days Back</h4>
        </div>
      </div>

      <div className="blockContainer">
        <div className="blockIcon">
          <ShutterSpeed fontSize='large'/>
        </div>
        <div className="blockContent">
          <h4>365 Days</h4>
          <h4>For free return</h4>
        </div>
      </div>

      <div className="blockContainer">
        <div className="blockIcon">
          <AssuredWorkload fontSize='large'/>
        </div>
        <div className="blockContent">
          <h4>Payment</h4>
          <h4>Secure system</h4>
        </div>
      </div>
    </div>
    </>
  )
}
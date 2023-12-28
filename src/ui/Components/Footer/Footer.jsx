import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footerleft">
          <h1><img src="https://bonik-react.vercel.app/assets/images/logo.svg" alt="logo" /></h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non distinctio vitae voluptatem fugiat pariatur tempore quo dignissimos eaque ut atque minima voluptates expedita, possimus asperiores eos dolor ratione quam nam.</p>
          <div className="googleDiv">
            <div className="footergoogle">
             Google
            </div>
            <div className="footerplaystore">
              Playstore
            </div>
          </div>
        </div>
        <div className="footerRight">
          footright
        </div>
    </div>
  )
}

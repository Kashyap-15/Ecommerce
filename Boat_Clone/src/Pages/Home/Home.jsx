import React from 'react'
import "./Home.css"
import HeroSection from '../../Components/Herosection/HeroSection'
import VideoCom from '../../Components/VideoCom/VideoCom'
import TodayDeal from '../../Components/TodayDeal/TodayDeal'

export default function Home() {
  return (
    <div className='homeMain'>
       <HeroSection/>
       <VideoCom/>
       <TodayDeal/>
    </div>
  )
}

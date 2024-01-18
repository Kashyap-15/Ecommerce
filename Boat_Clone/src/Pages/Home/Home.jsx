import React from 'react'
import HeroSection from '../../Components/Herosection/HeroSection'
import VideoCom from '../../Components/VideoCom/VideoCom'
import TodayDeal from '../../Components/TodayDeal/TodayDeal'
import "./Home.css"
import HomeCard from '../../Components/HomeCard/HomeCard'
import ActorCom from '../../Components/ActorDom/ActorCom'

export default function Home() {


  return (
    <div className='homeMain'>
          <HeroSection />
          <VideoCom />
          <TodayDeal />
          <HomeCard/>
          <ActorCom/>
          <h1>dsfwefhb</h1>
    </div>
  )
}

import React from 'react'
import "./HeroSection.css"
import { Carousel } from 'react-responsive-carousel'
import { CarousalData } from '../../../DataForImages'

export default function HeroSection() {
  return (
    <div className='heroSection'>
        <Carousel autoPlay="ture" showThumbs={false} infiniteLoop="true" interval={5000}>
            {
                CarousalData.map((ele,i)=>{
                    return <div key={i}>
                    <img src={ele.img} />
                </div>
                })
            }
        </Carousel>
    </div>
  )
}

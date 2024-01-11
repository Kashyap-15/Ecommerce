import React, { useState } from 'react'
import "./TodayDeal.css"

export default function TodayDeal() {
    const [timer, setTimer] = useState({
        hours:20,
        min:58,
        sec:4,
    })
    setTimeout(() => {
        if(timer.sec>0){
            setTimer({...timer,sec:timer.sec-1})
        }
        else if(timer.min>0){
            setTimeout(() => {
                setTimer(timer.sec=59)
                setTimer({...timer,min:timer.min-1})
            }, 1000);
        }
        else if(timer.hours>0){
            setTimeout(()=>{
                setTimer(timer.min=59)
                setTimer({...timer,hours:timer.hours-1})
            },1000)
        }
    }, 1000);
  return (
    <div className='todayDeal'>
        <h1 className="todayDealTitle">Today's <b>Offers</b></h1>
        <div className="todayDealDiv">
            <img className='todayDealImg' src="HomeImg/DealImg.webp" alt="" />
            <div className="todayDealTimer">
                {`Ending in :  ${timer.hours} Hours : ${timer.min} Min : ${timer.sec} Sec`}
            </div>
        </div>
    </div>
  )
}

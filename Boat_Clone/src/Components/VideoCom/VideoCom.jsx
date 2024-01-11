import React, { useRef } from 'react'
import "./VideoCom.css"
import { VideoCardData } from '../../../DataForImages'

export default function VideoCom() {  

    const StartVideo = (video)=>{
        video.play()
    }
    const pauseVideo = (video)=>{
        video.pause()
    }
    return (
        <>
    <h1 className="videoComTitle">Explore <b>Bestsellers</b></h1>
    <div className='videoCom'>
        {
            VideoCardData.map((ele,i)=>{
                const videoRef = useRef()
                return <div key={i} className="videoDiv" onMouseEnter={()=>StartVideo(videoRef.current)} onMouseLeave={()=>pauseVideo(videoRef.current)}>
                <video ref={videoRef} className='Video' muted loop>
                    <source src={ele.video} type='video/mp4' />
                </video>
                <p className='videoTitle'>{ele.names}</p>
            </div>
            })
        }
    </div>
    </>
  )
}

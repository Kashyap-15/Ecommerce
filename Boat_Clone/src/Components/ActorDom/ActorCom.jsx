import React from 'react'
import "./ActorCom.css"
import { ActorData } from '../../../DataForImages'
import { ArrowCircleRightOutlined } from '@mui/icons-material'


export default function ActorCom() {
  return (
    <>
        <h3 className='actorComMainTitle'>Shop by <b>Lifestyle</b></h3>
    <div className='actorCom'>

        {
            ActorData.map((ele,i)=>{
                return <div key={i} className='actorComFlexDiv'>
                <div className="actorComImageDiv">
                    <img className='actorComImg' src={ele.img} alt="Images" />
                    <div className="actorComDetailsDiv">
                        <span className='actorComTitle'>{ele.title}</span>
                        <span className='actorComView'>View All <ArrowCircleRightOutlined/> </span>
                    </div>
                </div>
            </div>
            })
        }
    </div>
        </>
  )
}

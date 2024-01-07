import { TimelineOutlined } from '@mui/icons-material'
import React from 'react'

export default function PriceCard({price,percentage,bg,title}) {
  return (
    <div className='priceCard' style={{backgroundColor:`${bg}`}}>
        <div className='upperPart'>
            <h1 className='Price'>{price}</h1>
            <span className='priceTitle'>{title}</span>
        </div>
        <div className="lowerpart">
            <div className="percentagePrice">
            <h6 className='percentage'>{percentage}</h6>
            <span className='percentageTitle'>This Month</span>
            </div>
            <div className="smallchart">
                <TimelineOutlined fontSize='large'/>
            </div>
        </div>
    </div>
  )
}

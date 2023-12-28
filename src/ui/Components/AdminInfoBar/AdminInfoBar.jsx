import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import React from 'react'
import "./AdminInfoBar.css"

export default function AdminInfoBar() {
    return (
        <>
            <div className='featured'>
                <div className="featuredItem">
                    <span className="featuredTitle">Revenue</span>
                    <div className="featuredPriceContainer">
                        <span className="featuredPrice">$2467</span>
                        <span className="featuredPriceChange">
                            +21% <ArrowUpward className='featuredArrow' />
                        </span>
                    </div>
                    <span className='featuredDuration'>
                        Compared To Last Month
                    </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Sales</span>
                    <div className="featuredPriceContainer">
                        <span className="featuredPrice">$3321</span>
                        <span className="featuredPriceChange">
                            +35% <ArrowUpward className='featuredArrow' />
                        </span>
                    </div>
                    <span className='featuredDuration'>
                        Compared To Last Month
                    </span>
                </div>

                <div className="featuredItem">
                    <span className="featuredTitle">Cost</span>
                    <div className="featuredPriceContainer">
                        <span className="featuredPrice">$1879</span>
                        <span className="featuredPriceChange">
                            -12% <ArrowDownward className='featuredArrow negative' />
                        </span>
                    </div>
                    <span className='featuredDuration'>
                        Compared To Last Month
                    </span>
                </div>
            </div>
        </>
    )
}

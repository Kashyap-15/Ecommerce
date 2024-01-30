import React from 'react'
import "./HomeCard.css"
import { Star, Verified } from '@mui/icons-material'

export default function HomeCard() {

  return (
    <div className='homeCard'>
        <div className="homeCardMain">
            <div className="homeCardImageDiv">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" alt="Image" className="homeCardImg" />
            </div>
            <div className="homeCardPlaybackDiv">
              <span className='homeCardPlayback'>60 Hours Playback</span>
            </div>
            <h4 className='homeCardTitle'>Airpodes 131</h4>
            <div className="homeCardDetailDiv">
              <div className="homeCardDetail">

                  <div className="homeCardPriceDiv">
                    <span className='homeCardPrice'>₹899</span>
                    <span className='homeCardStrikePrice'>₹2399</span>
                    <span className='homeCardDiscount'>70% off</span>
                  </div>

                  <div className="homeCardRatingDiv">
                    <span className='homeCardRatingStar'><Star fontSize='small' color='yellow'/></span>
                    <span className='homeCardRating'>4.8</span>
                    <span>|</span>
                    <span className='homeCardTotalRaters'>1336</span>
                    <span className='homeCardVarifired'><Verified  fontSize='small' color='green'/></span>
                  </div>

              </div>
              <div className="homeCardAddCartDiv">
                  Add to Cart
              </div>
            </div>
        </div>
        <div className="homeCardMain">
            <div className="homeCardImageDiv">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD_161.jpg?v=1686297917" alt="Image" className="homeCardImg" />
            </div>
            <div className="homeCardPlaybackDiv">
              <span className='homeCardPlayback'>40 Hours Playback</span>
            </div>
            <h4 className='homeCardTitle'>Airpodes 161</h4>
            <div className="homeCardDetailDiv">
              <div className="homeCardDetail">

                  <div className="homeCardPriceDiv">
                    <span className='homeCardPrice'>₹999</span>
                    <span className='homeCardStrikePrice'>₹3199</span>
                    <span className='homeCardDiscount'>60% off</span>
                  </div>

                  <div className="homeCardRatingDiv">
                    <span className='homeCardRatingStar'><Star fontSize='small' color='yellow'/></span>
                    <span className='homeCardRating'>4.9</span>
                    <span>|</span>
                    <span className='homeCardTotalRaters'>149</span>
                    <span className='homeCardVarifired'><Verified  fontSize='small' color='green'/></span>
                  </div>

              </div>
              <div className="homeCardAddCartDiv">
                  Add to Cart
              </div>
            </div>
        </div>
        <div className="homeCardMain">
            <div className="homeCardImageDiv">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_235_V2_ac99fe3f-ea0d-4a97-ae36-ee20e835dbe8.png?v=1688047719" alt="Image" className="homeCardImg" />
            </div>
            <div className="homeCardPlaybackDiv">
              <span className='homeCardPlayback'>60 Hours Playback</span>
            </div>
            <h4 className='homeCardTitle'>Airpodes 131</h4>
            <div className="homeCardDetailDiv">
              <div className="homeCardDetail">

                  <div className="homeCardPriceDiv">
                    <span className='homeCardPrice'>₹899</span>
                    <span className='homeCardStrikePrice'>₹2399</span>
                    <span className='homeCardDiscount'>70% off</span>
                  </div>

                  <div className="homeCardRatingDiv">
                    <span className='homeCardRatingStar'><Star fontSize='small' color='yellow'/></span>
                    <span className='homeCardRating'>4.8</span>
                    <span>|</span>
                    <span className='homeCardTotalRaters'>1336</span>
                    <span className='homeCardVarifired'><Verified  fontSize='small' color='green'/></span>
                  </div>

              </div>
              <div className="homeCardAddCartDiv">
                  Add to Cart
              </div>
            </div>
        </div>
        <div className="homeCardMain">
            <div className="homeCardImageDiv">
              <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_f04f74fd-45d4-4614-85cf-6ccf69c4cf90.jpg?v=1691395049" alt="Image" className="homeCardImg" />
            </div>
            <div className="homeCardPlaybackDiv">
              <span className='homeCardPlayback'>60 Hours Playback</span>
            </div>
            <h4 className='homeCardTitle'>Airpodes 131</h4>
            <div className="homeCardDetailDiv">
              <div className="homeCardDetail">

                  <div className="homeCardPriceDiv">
                    <span className='homeCardPrice'>₹899</span>
                    <span className='homeCardStrikePrice'>₹2399</span>
                    <span className='homeCardDiscount'>70% off</span>
                  </div>

                  <div className="homeCardRatingDiv">
                    <span className='homeCardRatingStar'><Star fontSize='small' color='yellow'/></span>
                    <span className='homeCardRating'>4.8</span>
                    <span>|</span>
                    <span className='homeCardTotalRaters'>1336</span>
                    <span className='homeCardVarifired'><Verified  fontSize='small' color='green'/></span>
                  </div>

              </div>
              <div className="homeCardAddCartDiv">
                  Add to Cart
              </div>
            </div>
        </div>
    </div>
  )
}

import React, {useState } from 'react'
import "./Cards.css"
import { FavoriteBorderOutlined, Visibility } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { cartDetails } from '../../../redux/Feature/Cart/Cart'

export default function Cards({Name,Img,Price,Sprice}) {
  const [cartCount, setCartCount] = useState(0)
  let dispatch = useDispatch()

  const cartHandler=()=>{
    dispatch(cartDetails({Name,Img,Price,cartCount}))
  }

  function Incree() {
    setCartCount(cartCount + 1)
    }
    
    function Decree() {
      if (cartCount>0) {
      setCartCount(cartCount - 1)
    }
  }

  return (
    <>
    <div className='productCard'>
      <div className="cardContainer">
        <div className="imgContainer">
          <img className='img' src={Img} alt="img" />
          <div className='discount'>12% off</div>
          <div className="wishlist">
            <FavoriteBorderOutlined/>
            <Visibility/>
          </div>
        </div>
        <div className="cardContent">
          <div className="carNameContainer">
            <h4 className='cardName'>{Name}</h4>
            <div className="cardSize">1kg</div>
          </div>
          <div className='cardPriceContainer'>
            <span>Price : </span>
            <span className='cardPrice'>{Price}$</span>
            <span className="cardStrike">{Sprice}$</span>
          </div>
          <div className="buyIcon">
            <div className="qty">
              <button className='incree' onClick={() => Incree()}>+</button>
              <span className='qtyCount'>{cartCount}</span>
              <button className='decree' onClick={() => Decree()}>-</button>
            </div>
            <div className='d-flex flex-column gap-2'>
            <button className='buybtn' onClick={()=>cartHandler()}>+ Add</button>
            {/* <button className='buybtn'>Buy</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

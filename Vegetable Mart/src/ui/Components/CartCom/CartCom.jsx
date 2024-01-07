import React, { useEffect, useState } from 'react'
import "./CartCom.css"
import { Close } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'



export default function CartCom({Pname,Pprice,Pimg,cartCount,setTotalCount}) {
  let Count = useSelector((state)=>state.cartReducer.cartFullDetails)
  
  const [cartNum, setCartNum] = useState(cartCount)
  
  useEffect(()=>{
    setTotalCount(cartNum*Pprice)
  },[cartNum*Pprice])

  const increment=()=>{
    setCartNum(cartNum+1)
  }
  const decrement=()=>{
    setCartNum(cartNum-1)
  }
  
  return (
    <div className='cartCom'>
        <div className="cartComContainer">
            <div className="qtyBar">
              <button className='increment' onClick={increment}>+</button>
              <span className='qtyCount'>{cartNum}</span>
              <button className='decrement' onClick={decrement}>-</button>
            </div>
            <div className="sideCartImg">
                <img src={Pimg} alt="img" />
            </div>
            <div className="priceCalDiv">
                <h6>{Pname}</h6>
                <p>{Pprice} x {cartNum}</p>
                <h5>{Pprice*cartNum} ₹</h5>
            </div>
            <div className="removeDiv">
                <Close fontSize='small' />
            </div>
        </div>       
    </div>   
  )
}

import React, { useEffect, useState } from 'react'
import "./SideCart.css"
import { Close, ShoppingBag } from '@mui/icons-material'
import CartCom from '../CartCom/CartCom'
import { useSelector } from 'react-redux'

export default function SideCart({action}){
    const [isEmpty, setIsEmpty] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const details = useSelector((state)=>state.cartReducer)    
    
    if(details.cartFullDetails.length>0){
        useEffect(()=>{
            setIsEmpty(!isEmpty)
        },[])
    }
    return (
        <div className='cart'>
            <div className='cartBlack' onClick={()=>action(false)}>

            </div>
            <div className="cartContainer">
                <button onClick={()=>action(false)} className='cartCloseBtn'><Close /></button>
                <div className='cartCountBar'> <ShoppingBag fontSize='large' /> {details.cartFullDetails.length} items in the Cart</div>
                {
                    isEmpty ? (
                        <div className="emptyCart">
                            <div>
                                <img src="https://bonik-react.vercel.app/assets/images/logos/shopping-bag.svg" alt="emptybag" />
                            </div>
                            <div>
                                <h4>Your shopping bag is empty.</h4>
                                <h4>Start shopping</h4>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className='sideCartBar'>
                                {
                                    details.cartFullDetails.map((e,i)=>{
                                       return <CartCom key={i} Pname={e.Name} Pprice={e.Price} Pimg={e.Img} cartCount={e.cartCount} setTotalCount={setTotalCount} />
                                    })
                                }
                            </div>
                            <div className="sideCartBarBtns">
                                <div className='cartCheckOutDiv'>CheckOut Now ({totalCount}₹)</div>
                                <div className="cartDivNav">View Cart</div>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

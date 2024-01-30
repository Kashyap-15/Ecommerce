import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BE_URL } from '../../../DataForImages';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchCart } from '../../01Redux/Feature/Cart/CartSlice';
import "./CartOffCanvas.css"
import { Verified } from '@mui/icons-material';


export default function CartOffCanvas({toggle,setToggle}) {
  const dispatch = useDispatch()
  
  const {carts,cartId} = useSelector((state)=>state?.cartReducer)
  console.log("🚀 ~ CartOffCanvas ~ carts:", carts)
  
  useEffect(()=>{
    dispatch(fetchCart())
  },[])
  
  
  const cartupdateHandler = (updateId) => {
    console.log("🚀 ~ cartupdateHandler ~ updateId:", updateId)
    axios({
      method:"post",
      url:`${BE_URL}/cart/create/${updateId}`,
      headers:{
        "Content-Type":"application/json",
        authorization : `bearer ${JSON.parse(localStorage.getItem("token"))}`
       }
    }).then((res)=>{
      dispatch(fetchCart())
    }).catch((err)=>{
      console.log("---Error---");
    })
  }
  
  const cartupdate = (eleId,eleCount) => {
    axios({
      method:"put",
      url:`${BE_URL}/cart/update`,
    data:{
      _id:cartId,
      productId:eleId,
      isRemove:eleCount==1?true:false
    },
    headers:{
      "Content-Type":"application/json",
      authorization : `bearer ${JSON.parse(localStorage.getItem("token"))}`
     }
    }).then((res)=>{
      dispatch(fetchCart())
    }).catch((err)=>{
      console.log(err.message);
    })
  }
  
  return (
    <>
      <div style={{ zIndex: "999" }}>
        <Offcanvas show={toggle} placement='end' onHide={()=>setToggle(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>bo<span style={{color:"#ff0000"}}>A</span>thea's Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className='cartBodyDiv'>
              {
                carts?.map((ele,i)=>{
                      return <div key={i} className='cartDiv'>
                      <div className="cartImgDiv">
                        <img src={ele?.productId?.thumbnail} alt="cart image" className="cartImg" />
                      </div>
                      <div className="cartContentDiv">
                        <div className='cartcontentTitle'>{ele.productId?.title}</div>
                        <div className='cartcontentPrice'>₹ {ele.productId?.price} </div>
                        <div className='cartcontentCount'> 
                          <div className='cartcontentRating'>
                             <span className='cartContentRateCount'>{ele.productId?.rating}</span> 
                             <span className='homeCardVarifired'><Verified fontSize='small'/></span>
                          </div>
                          <div className='cartcontentCounter'>
                              <button className='cartContentSign' onClick={()=>cartupdateHandler(ele?.productId?._id)}>+</button>
                              <div className='cartContentNumber'>{ele?.count}</div>
                              <button className='cartContentSign' onClick={()=>cartupdate(ele?.productId?._id,ele?.count)}>-</button>
                          </div>
                        </div>
                      </div>
                    </div>
                })
              }
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

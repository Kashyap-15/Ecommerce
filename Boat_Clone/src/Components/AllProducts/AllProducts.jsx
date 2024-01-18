import React, { useEffect, useState } from 'react'
import "./AllProducts.css"
import { KeyboardArrowDown, Star, SwapVert, TuneOutlined, Verified } from '@mui/icons-material'
import axios from 'axios'
import { BE_URL } from '../../../DataForImages'
import { toast } from 'react-toastify'



export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([])
  
  useEffect(()=>{
    axios({
      url:`${BE_URL}/product/getAll`
    }).then((res)=>[
      setAllProducts(res.data.data)
    ]).catch((err)=>{
      toast.error(err.message)
    })
  },[])

  return (
    <>
    <div className='allProductsHeader'>
      <h1 className='ProductTitle'>Boat Products</h1>
      <div className='ProductFilterDiv'>
          <span className='ProductFilter'><TuneOutlined/> Filter <KeyboardArrowDown/></span>
          <span className='ProductFilter'><SwapVert/> Sort : </span>
      </div>
    </div>
    <div className='allProducts'>
      {
        allProducts.map((ele)=>{
          return <div key={ele._id} className="allProductDiv">
          <div className="allproductsImgDiv">
            <img className='allproductsImg' src={ele.images} alt="" />
          </div>
          <div className="allproductContent">
            <div className="homeCardRatingDiv">
                <span className='homeCardRatingStar'><Star fontSize='small' /></span>
                <span className='homeCardRating'>4.8</span>
                <span>|</span>
                <span className='homeCardTotalRaters'>1336</span>
                <span className='homeCardVarifired'><Verified  fontSize='small'/></span>
            </div>
            <h3 className='allproductTitle'>{ele.title}</h3>
              <div className="allProductsPriceDiv">
                  <span className='allProductsPrice'>₹{ele.price}</span>
                  <span className='allProductsStrikePrice'>₹2399</span>
                  <span className='allProductsDiscount'>70% off</span>
              </div>
           <hr />
           <div className='allProductBtn'>
              Add to Cart
           </div>
          </div>
      </div>
        })
      }
    </div>
    </>
  )
}

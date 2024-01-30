import React, { useEffect, useState } from 'react'
import "./AllProducts.css"
import { KeyboardArrowDown, Star, SwapVert, TuneOutlined, Verified } from '@mui/icons-material'
import axios from 'axios'
import { BE_URL } from '../../../DataForImages'
import { toast } from 'react-toastify'
import FilterOffCanvas from '../FilterOffCanvas/FilterOffCanvas'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCart } from '../../01Redux/Feature/Cart/CartSlice'


export default function AllProducts() {
  const [allProducts, setAllProducts] = useState([])
  const [show, setShow] = useState(false);

  const token = useSelector((state)=>state.authReducer?.token)
  const dispatch = useDispatch()
  
  const [filteredData, setFilteredData] = useState({
    category: [],
    color: [],
    size: [],
    gender: "",
    price: {
      lt: 0,
      gt: 0,
    },
  })
  
  useEffect(()=>{
    axios({
      method:"get",
      url:`${BE_URL}/product/getAll`,
    }).then((res)=>[
      setAllProducts(res.data.data)
    ]).catch((err)=>{
      toast.error(err.message)
    })
  },[filteredData])
  
  // console.log("🚀 ~ AllProducts ~ filteredData:", filteredData)
  
  const carthandler = (cartid)=>{
      axios({
        method:"post",
        url:`${BE_URL}/cart/create/${cartid}`,
        headers:{
          "Content-Type":"application/json",
          authorization:`bearer ${token}`
        }
      }).then((res)=>{
        toast.success("Product Added",{
          autoClose : 200
        })
        dispatch(fetchCart())
        return res.data.data
      }).catch((err)=>{
        toast.error(err.message)  
      })
  }

 return (
    <>
    <FilterOffCanvas show={show} setShow={setShow} AllproductFilter={filteredData} AllproductsetFilter={setFilteredData} />
    <div className='allProductsHeader'>
      <h1 className='ProductTitle'>Boat Products</h1>
      <div className='ProductFilterDiv'>
          <span className='ProductFilter' onClick={()=>setShow(!show)}><TuneOutlined/> Filter <KeyboardArrowDown/></span>
          <span className='ProductFilter'><SwapVert/> Sort : </span>
      </div>
    </div>
    <div className='allProducts'>
      {
        allProducts.map((ele)=>{
          return <div key={ele._id} className="allProductDiv">
          <div className="allproductsImgDiv">
            <img className='allproductsImg' src={ele.thumbnail} alt="" />
          </div>
          <div className="allproductContent">
            <div className="homeCardRatingDiv">
                <span className='homeCardRatingStar'><Star fontSize='small' /></span>
                <span className='homeCardRating'>{ele.rating}</span>
                <span>|</span>
                <span className='homeCardTotalRaters'>{ele.totalRaters}</span>
                <span className='homeCardVarifired'><Verified  fontSize='small'/></span>
            </div>
            <h3 className='allproductTitle'>{ele.title}</h3>
              <div className="allProductsPriceDiv">
                  <span className='allProductsPrice'>₹{ele.price}</span>
                  <span className='allProductsStrikePrice'>₹7399</span>
                  <span className='allProductsDiscount'>70% off</span>
              </div>
              <div className='allproductDescription'>
                {ele.description}
              <hr className='allproductHr' />
              </div>
           <div className='allProductBtn' onClick={()=>carthandler(ele._id)}>
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

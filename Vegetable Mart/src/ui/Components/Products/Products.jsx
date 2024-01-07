import React, { useEffect, useState } from 'react'
import { MixData } from '../../../../VegeData';
import "./Products.css"
import { ArrowRight } from '@mui/icons-material'
import Cards from '../Cards/Cards';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Products() {
  let [allData,setAllData]=useState([])
 

  useEffect(()=>{
    axios({
      url:"http://localhost:9999/product/getAll",
    }).then((res)=>{
      setAllData(res.data.data)
    }).catch((err)=>{
      toast.error(err.message)
    })
  },[])

  
 
  return (
    <div className="products">
      <div className="productsContainer">
        <LeftSideBar />
      </div>
      <div className="productsCards">
        <div className="productsCard">
          <h1 className='productTitle'>Popular Products</h1>
          <h4 className='viewall'>View All <span><ArrowRight /></span></h4>
        </div>
        <div className='cardGrid'>
          {
            allData?.map((e,i)=>{
              return <Cards key={i} Name={e.title} Img={e.images} Price={e.price} Sprice={300}/>
            })
          }
        </div>
        <div className='loadMoreBtn'>
          <button>Load More...</button>
        </div>
        <div className="discountDiv">
          <div className="discountContent">
            <p className="date">till 10 dec,2021</p>
            <h3>25% Special off Today</h3>
            <h3>Only For Vegetable</h3>
            <button>Shope Now</button>
          </div>
          <div className="discountImg">
            <img className='disImg' src="https://bonik-react.vercel.app/assets/images/Groceries%20Shop/vagitable.png" alt="dicImg" />
          </div>
        </div>
        {/* <div className="footerDiv">
          <Footer/>
        </div> */}
      </div>
    </div>
  )
}

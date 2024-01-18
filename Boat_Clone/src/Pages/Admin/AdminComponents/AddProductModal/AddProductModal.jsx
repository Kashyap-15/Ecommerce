import React, { useEffect, useState } from 'react'
import "./AddProductModal.css"
import { Button, Modal } from 'react-bootstrap'
import Select from 'react-select';
import axios from 'axios';
import { BE_URL } from '../../../../../DataForImages';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { fetchProduct } from '../../../../01Redux/Feature/Product/ProductSlice';

export default function AddProductModal({ show,setShow,updateflag,setUpdateflag }) {
  const [productData, setProductData] = useState({
    title: "",
    thumbnail: "",
    price: "",
    description: "",
    size: [],
    category: [],
    color: [],
    rating: "",
    totalRaters: "",
  })
  const [searchParam] = useSearchParams()
  const paramid = searchParam.get("id");

  useEffect(()=>{
    axios({
      method:"get",
      url:`${BE_URL}/product/getProductById/${paramid}`
    }).then((res)=>[
      setProductData(res.data.data)
    ])
  },[location.search])
  
  const sizeOptions = [
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
  ];
  const categoryOptions = [
    { value: 'Airpodes', label: 'Airpodes' },
    { value: 'Speakers', label: 'Speakers' },
    { value: 'wired Earphones', label: 'wired Earphones' },
  ];
  const colorOptions = [
    { value: 'Red', label: 'Red' },
    { value: 'Blue', label: 'Blue' },
    { value: 'Green', label: 'Green' },
  ];
  
  const token = useSelector((state)=>state?.authReducer?.token)
  const dispatch = useDispatch()
  
  const submitHandler = ()=>{
    console.log("🚀 ~ AddProductModal ~ productData:", productData)
    axios({
      method:"post",
      url:`${BE_URL}/product/create`,
      data:productData,
      headers:{
        "Content-Type":"application/json",
         authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      toast.success("Product Added Successfully")
      dispatch(fetchProduct())
    }).catch((err)=>{
      toast.error(err.message)
    })
    setShow(!show)
    setProductData({
      title: "",
      thumbnail: "",
      price: "",
      description: "",
      size: [],
      category: [],
      color: [],
      rating: "",
      totalRaters: "",
    })
  }

  const updateHandler = ()=>{
    axios({
      method:"put",
      url:`${BE_URL}/product/update/${paramid}`,
      data:productData
    }).then((res)=>{
      dispatch(fetchProduct())
      toast.success("Product Updated Successfully")
    }).catch((err)=>{
      toast.error(err.message)
    })
    setUpdateflag(!updateflag)
    setProductData({
      title: "",
      thumbnail: "",
      price: "",
      description: "",
      size: [],
      category: [],
      color: [],
      rating: "",
      totalRaters: "",
    })
    setShow(!show)
  }
  
  return (
    <>
      <Modal show={show} onHide={() => setShow(!show)} >
        <Modal.Header closeButton>
          <Modal.Title>
            Add the bo<span style={{ color: "#ff0000" }}>A</span>t Product Here.....
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='addProductModal'>
          
          <div className="addProductDiv">
            

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Product Title :</label>
                <input className='addProductInputBar' type="text" placeholder='Airpodes 181'
                  value={productData?.title}
                  onChange={(e)=>setProductData({...productData,title:e?.target?.value})}
                />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Thumbnail :</label>
                <input className='addProductInputBar' type="text" placeholder='Image URL'
                value={productData?.thumbnail}
                onChange={(e)=>setProductData({...productData,thumbnail:e?.target?.value})}
                />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Price :</label>
                <input className='addProductInputBar' type="number" placeholder='357'
                value={productData?.price}
                onChange={(e)=>setProductData({...productData,price:e?.target?.value})}
                />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Description :</label>
                <input className='addProductInputBar' type="text" placeholder='357'
                value={productData?.description}
                onChange={(e)=>setProductData({...productData,description:e?.target?.value})}
                />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Size :</label>
                <Select isMulti className='selectContainer'
                  options={sizeOptions}
                  closeMenuOnSelect={false}
                  placeholder='Select The Size'
                  // value={productData.size.map((e)=>{value:e;label:e})}
                  onChange={(e)=>setProductData({...productData,size:e?.map((ele)=>ele.value)})}
                  />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Category :</label>
                <Select className='selectContainer'
                  options={categoryOptions}
                  closeMenuOnSelect={true}
                  onChange={(e)=>setProductData({...productData,category:[e?.value]})}
                  />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Color :</label>
                <Select isMulti className='selectContainer'
                  options={colorOptions}
                  closeMenuOnSelect={false}
                  onChange={(e)=>setProductData({...productData,color:e?.map((ele)=>ele.value)})}
                  />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Ratings :</label>
                <input className='addProductInputBar' type="number" placeholder='4.5'
                value={productData?.rating}
                onChange={(e)=>setProductData({...productData,rating:e?.target?.value})}
                />
              </div>

              <div className="addProductInput">
                <label className='addProductLabel' htmlFor="">Total Raters :</label>
                <input className='addProductInputBar' type="number" placeholder='35367'
                 value={productData?.totalRaters}
                 onChange={(e)=>setProductData({...productData,totalRaters:e?.target?.value})}
                />
              </div>

              <button className="loginButtonDiv" onClick={updateflag ? ()=>updateHandler() : ()=>submitHandler()}>
                <span className='LoginButton'>
                  {
                    updateflag ? <>
                      UPDATE This bo<span style={{ color: "#ff0000" }}>A</span>t Product
                    </> :
                    <>
                      ADD This bo<span style={{ color: "#ff0000" }}>A</span>t Product
                    </>
                  }
                </span>
              </button>

          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}





// {
// 	"status": 200,
// 	"data": {
// "title": "ABCD",
// 		"description": "adfjcwebibfiuwiebvw",
// 		"price": 345,
// 		"images": [],
// 		"thumbnail": "afefqf",
// 		"category": [],
// 		"color": [
// 			"red",
// 			"black",
// 			"white"
// 		],
// 		"size": [
// 			"44",
// 			"45",
// 			"42",
// 			"43"
// 		],
// 		"isAvailable": true,
// 		"rating": 0,
// 		"totalRaters": 0,
// 		"totalSoldUnit": 0,
// 		"_id": "659fe95a72d9124089f83836",
// 		"createdAt": "2024-01-11T13:12:58.351Z",
// 		"updatedAt": "2024-01-11T13:12:58.351Z",
// 		"__v": 0
// 	}
// }
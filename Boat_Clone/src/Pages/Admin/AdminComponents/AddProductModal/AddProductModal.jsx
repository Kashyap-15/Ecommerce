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

export default function AddProductModal({ show,setShow,updateflag,setUpdateflag,pagination,setPagination }) {
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

  const paramid = new URLSearchParams(location.search).get("id");

  // useEffect(()=>{
  //   axios({
  //     method:"get",
  //     url:`${BE_URL}/product/getProductById/${paramid}`
  //   }).then((res)=>[
  //     setProductData(res.data.data)
  //   ])
  // },[paramid])

  
  useEffect(() => {
    if (paramid) {
      axios({
        method: "get",
        url: `${BE_URL}/product/getProductById/${paramid}`,
      })
        .then((res) => {
          setProductData(res.data.data);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    } else {
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
      });
    }
  }, [paramid]);
  
  const sizeOptions = [
    { value: 'Small', label: 'Small' },
    { value: 'Medium', label: 'Medium' },
    { value: 'Large', label: 'Large' },
  ];
  const categoryOptions = [
    { value: 'Airpodes', label: 'Airpodes' },
    { value: 'Speakers', label: 'Speakers' },
    { value: 'wired Earphones', label: 'wired Earphones' },
    { value: 'Smart Watches', label: 'Smart Watches' },
  ];
    const colorOptions = [
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'blue', label: 'blue' },
      { value: 'gray', label: 'Gray' },
      { value: 'lightblue', label: 'SkyBlue' },
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'pink', label: 'Pink' },
      { value: 'brown', label: 'Coffee' },
      { value: 'lightgreen', label: 'LightGreen' },
    ];
  
  const token = useSelector((state)=>state?.authReducer?.token)
  const data = useSelector((state)=>state?.productReducer)

  const dispatch = useDispatch()
  
  const submitHandler = ()=>{
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
      let curPage = pagination.page
      if(data?.products.length === 10) curPage+1
      setPagination({...pagination, page:curPage})
      dispatch(fetchProduct({page:pagination.page,limit:10}))
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
    setUpdateflag(false)
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
                  closeMenuOnSelect={true}
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
                  closeMenuOnSelect={true}
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

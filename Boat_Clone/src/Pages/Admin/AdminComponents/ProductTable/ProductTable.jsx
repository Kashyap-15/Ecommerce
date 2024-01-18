import React, { useEffect, useState } from 'react'
import "./ProductTable.css"
import { Button, Table } from 'react-bootstrap'
import AddProductModal from '../AddProductModal/AddProductModal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../../01Redux/Feature/Product/ProductSlice';
import { toast } from 'react-toastify';
import { Create, DeleteForever, EditAttributes } from '@mui/icons-material';
import axios from 'axios';
import { BE_URL } from '../../../../../DataForImages';

export default function ProductTable() {
  const [allProduct, setAllProduct] = useState([])
  const [show, setShow] = useState(false);
  const [updateflag, setUpdateflag] = useState(false)
  const [seachParam,setSearchParam]=useSearchParams()
  
  let navigate = useNavigate()
  let dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProduct())
  },[])
  
  let data = useSelector((state)=>state?.productReducer)
  let token = useSelector((state)=>state?.authReducer?.token)
 
  useEffect(()=>{
    if(data?.error?.lenght>0){
      toast.error(data.error)
    }
    setAllProduct(data.products)
  }),[data]

  const delHandler = (id)=>{
    axios({
      method:"delete",
      url:`${BE_URL}/product/delete/${id}`,
      headers:{
        authorization :`bearer ${token}`
      }
    }).then((res)=>{
      toast.success("Product Deleted Successfully")
      dispatch(fetchProduct())
    }).catch((err)=>{
      toast.error(err.message)
    })
  }

  const updateHandler= (e)=>{
    setSearchParam({id:e?._id})
    setShow(!show)
    setUpdateflag(!updateflag)
  }

  return (
    <>
      <AddProductModal show={show} setShow={setShow} setUpdateflag={setUpdateflag} updateflag={updateflag} />
      <div className='productTable'>
        <div className='productTableTitle'>
          <h1 className='productTableTitleH1'>bo<span style={{ color: "#ff0000" }}>A</span>t Products</h1>
          <div className='productTableTitleBtn' variant="dark"onClick={()=>navigate('/admin')} >
                Back To Dashboard
          </div>
        </div>
        <hr />
        <div className='productTableDiv'>
          <div className="productTableAddDiv">
            <input className='productTableTitleInput' type="text" placeholder='Search' />
            <button className='productTableTitleBtn' variant="dark" onClick={() => setShow(!show)}>
              Add Product
            </button>
          </div>
          {
            data?.pending ? <h1>Fetching Data</h1> :
            <Table className='productTableMain' striped bordered hover variant="light">
            <thead>
              <tr>
                <th>Sr. No</th>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Size</th>
                <th>Categories</th>
                <th>Color</th>
                <th>Rating</th>
                <th>Total Raters</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                allProduct.map((ele,i)=>{
                  return <tr key={ele._id}>
                  <td>{i+1}</td>
                  <td><img className='allproductImg' src={ele.images[0]} alt="Product Image"/></td>
                  <td>{ele.title}</td>
                  <td>{ele.description}</td>
                  <td>{ele.price}</td>
                  <td>{ele.size.map((sz,i)=>{
                    return <span key={i}>-{sz}-</span>
                      })}</td>
                  <td>{ele.category}</td>
                  <td>{ele.color.map((cl,i)=>{
                    return <span key={i} style={{backgroundColor:`${cl}`,color:`${cl}`}}>{cl}</span>
                  })}</td>
                  <td>{ele.rating}</td>
                  <td>{ele.totalRaters}</td>
                  <td >
                    <div className='productTableBtnDiv'>
                    <button className='productTableBtn' onClick={()=>updateHandler(ele)}>
                    <Create/>
                    </button>
                  
                    <button className='productTableBtn' onClick={()=>delHandler(ele._id)}>
                    <DeleteForever/>
                    </button>
                    </div>
                  </td>
                </tr>
                })
              }
              
            </tbody>
          </Table>
      }
        </div>
      </div>
    </>
  )
}

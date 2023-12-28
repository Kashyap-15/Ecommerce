import React, { useEffect, useState } from 'react'
import "./ProductTable.css"
import { ArrowBack, Delete, Garage, Inventory2, RemoveRedEye, RemoveRedEyeOutlined, TramSharp, WatchLater } from '@mui/icons-material'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproduct } from '../../../redux/Feature/Product/Product'
import { toast } from 'react-toastify'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import AdminModal from '../AdminModal/AdminModal'
import PaginationAdmin from '../Pagination/PaginationAdmin'

export default function ProductTable() {
  let [allproduct, setAllproduct] = useState([])
  let [modal, setModal] = useState(false);
  let [searchParam,setSearchParam]=useSearchParams()
  let [totalCount, setTotalCount] = useState(0);
  let [pagination, setPagination] = useState({
    limit:10,
    page:1
  });
  
  useEffect(()=>{
    dispatch(fetchproduct({page:pagination?.page,limit:10}))
  },[pagination])
  
  let dispatch = useDispatch()

  
  useEffect(() => {
    dispatch(fetchproduct())
  }, [])
  
  let data = useSelector((state) => state.productReducer)
  
  useEffect(() => {
    if (data?.error?.length > 0) {
      toast.error(data.error)
    }
    setAllproduct(data.products)
    setTotalCount(data?.count)
  }, [data])

  const delHandler =(id)=>{
    axios({
      method:"delete",
      url:`http://localhost:9999/product/delete/${id}`,
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    }).then((res) => {
      console.log("🚀 ~ file: ProductTable.jsx:38 ~ delHandler ~ res:", res.data)
      toast.success("Product Deleted")
      dispatch(fetchproduct())
    }).catch((err)=>{
      toast.error(err.message)
    })
  }
  
  const updatehandler=(e) => {
    setSearchParam({id:e?._id})
    setModal(!modal);
  }
  
  return (
    <>
      <div className='productTable'>
        <AdminModal modal={modal} setModal={setModal}/>
        <div className='d-flex align-items-center justify-content-between m-3'>
          <h4><span><Inventory2 /></span> Product List</h4>
          <NavLink to={"/"}>
            <Button color='error' variant='outlined'><span><ArrowBack /></span> Back to Dashboard</Button>
          </NavLink>
        </div>

        <PaginationAdmin 
            setPagination={setPagination}
            page={pagination?.page}
            limit={pagination?.limit}
            pageLimit={Math.ceil(totalCount / 10)}/>
        <div>
          {
            data.pending ? <h1>Fetching Data......</h1> :
              <Table striped>
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Box Size</th>
                    <th>Box Color</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allproduct?.map((e,i) => {
                      return(

                        <tr key={i}>
                        <td>{i}</td>
                        <td>{e._id}</td>
                        <td>
                          <img
                            style={{  height: "40px",width:"40px",borderRadius:"10px",objectFit:"cover" }}
                            src={e?.images[0]}
                            alt="img"
                            />
                        </td>
                        <td>{e.title}</td>
                        <td>{e.price}</td>
                        <td>{e.description}</td>
                        <td>
                           {[41, 42, 43, 44, 45].map?.((ele, i) => {
                            return <span key={i}>-{ele}-</span>;
                          })}
                        </td>
                        <td>
                           {e.color.map?.((ele, i) => {
                            return (<div className='d-flex mt-1' >
                              <div key={i} style={{backgroundColor:`${ele}`,width:"100%",height:"10px"}}></div>
                            </div>)
                          })}
                        </td>
                        <td>
                          <span className='eye' onClick={()=>updatehandler(e)}>
                          <RemoveRedEyeOutlined />
                          </span>
                          <span className='del' onClick={()=>delHandler(e?._id)}>
                          <Delete/>
                          </span>
                        </td>
                      </tr>
                    )
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

import React, { useEffect, useState } from 'react'
import "./ProductTable.css"
import { ArrowBack, Delete, Inventory2, RemoveRedEyeOutlined } from '@mui/icons-material'
import { NavLink, useSearchParams } from 'react-router-dom'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetchproduct } from '../../../redux/Feature/Product/Product'
import { toast } from 'react-toastify'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import AdminModal from '../AdminModal/AdminModal'
import PaginationAdmin from '../Pagination/PaginationAdmin'
import AddModal from '../AddModal/AddModal'


export default function ProductTable() {
  let [allproduct, setAllproduct] = useState([])
  let [modal, setModal] = useState(false)
  let [searchParam, setSearchParam] = useSearchParams()
  let [totalCount, setTotalCount] = useState(0)
  let [pagination, setPagination] = useState({
    limit: 10,
    page: 1,
  })

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchproduct({ page: pagination?.page, limit: 10 }))
  }, [pagination])

  let data = useSelector((state) => state.productReducer)

  useEffect(() => {
    if (data?.error?.length > 0) {
      toast.error(data.error)
    }
    setAllproduct(data?.products)
    setTotalCount(Math?.ceil(data?.count / 10))
  }, [data])

  const delHandler = (id) => {
    if (confirm("Are you sure?")) {
      axios({
        method: "delete",
        url: `http://localhost:9999/product/delete/${id}`,
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      }).then((res) => {
        toast.success("Product Deleted")
        setPagination({ ...pagination, page: allproduct?.length > 1 ? pagination?.page : pagination?.page - 1 })
        dispatch(fetchproduct({ page: allproduct?.length > 0 ? pagination?.page : pagination?.page - 1, limit: 10 }))
      }).catch((err) => {
        toast.error(err.message)
      })
    }
  }

  const updatehandler = (e) => {
    setSearchParam({ id: e?._id })
    setModal(!modal);
  }

  return (
    <>
      <div className='productTable'>
        <AdminModal modal={modal} setModal={setModal} />
        <div className='d-flex align-items-center justify-content-between m-3'>
          <h4><span><Inventory2 /></span> Product List</h4>
          <NavLink to={"/"}>
            <Button color='error' variant='outlined'><span><ArrowBack /></span> Back to Dashboard</Button>
          </NavLink>
        </div>
        <div className='d-flex align-items-center justify-content-end p-3'> <AddModal setPagination=
          {setPagination} pagination={pagination} /> </div>
        <div>

          {
            data?.pending ? <h1>Fetching Data......</h1> :
              <Table striped>
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Box Color</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    allproduct?.map((e, i) => {
                      return (

                        <tr key={i}>
                          <td>{(pagination?.page - 1) * 10 + i + 1}</td>
                          <td>{e._id}</td>
                          <td>
                            <img
                              style={{ height: "40px", width: "40px", borderRadius: "10px", objectFit: "cover" }}
                              src={e?.images[0]}
                              alt="img"
                            />
                          </td>
                          <td>{e.title}</td>
                          <td>{e.price}</td>
                          <td>{e.description}</td>
                          <td>
                            {e.color.map?.((ele, i) => {
                              return (<div key={i} className='d-flex mt-1' >
                                <div style={{ backgroundColor: `${ele}`, width: "100%", height: "10px" }}></div>
                              </div>)
                            })}
                          </td>
                          <td>
                            <span className='eye' onClick={() => updatehandler(e)}>
                              <RemoveRedEyeOutlined />
                            </span>
                            <span className='del' onClick={() => delHandler(e?._id)}>
                              <Delete />
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
        <PaginationAdmin
          setPagination={setPagination}
          page={pagination.page}
          limit={pagination.limit}
          pageLimit={totalCount}
        />
      </div>
    </>
  )
}

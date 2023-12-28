import { ArrowBack, Delete, Inventory2, RemoveRedEyeOutlined, VerifiedUser } from '@mui/icons-material';
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Users() {
    const [users, setUsers] = useState([])
    let {token} = useSelector((state)=>state.authReducer)

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://localhost:9999/user/getAll",
            headers:{
                authorization:`bearer ${token}`
            },
        }).then((res) => {
            console.log("🚀 ~ file: Users.jsx:22 ~ useEffect ~ res:", res.data)
            setUsers(res?.data?.data)
        }).catch((err)=>{
            toast.error(err.messsage)
        })
    },[])

  return (
    <>
      <div className='productTable'>
        <div className='d-flex align-items-center justify-content-between m-3'>
          <h4><span><VerifiedUser /></span> User List</h4>
          <NavLink to={"/"}>
            <Button color='error' variant='outlined'><span><ArrowBack /></span> Back to Dashboard</Button>
          </NavLink>
        </div>
        <div>
          {
              <Table striped>
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>ID</th>
                    <th>UserType</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users?.map((e,i) => {
                      return(
                        <tr>
                        <td>{i}</td>
                        <td>{e._id}</td>
                        <td>{e.userType}</td>
                        <td>{e.email}</td>
                        <td>
                          <RemoveRedEyeOutlined/>
                          <Delete/>
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

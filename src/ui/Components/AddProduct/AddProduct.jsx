import React, { useState } from 'react'
import "./AddProduct.css"
import { ArrowBack, ArrowForwardRounded, Widgets } from '@mui/icons-material'
import { Box, Button, MenuItem, TextField } from '@mui/material'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function AddProduct() {
  const [productData, setProductData] = useState({
    title: "",
    qty: "",
    images: "",
    category: "",
    price: "",
    description: "",
    discountPrice: "",
  })
  let token = useSelector((state) => state.authReducer.token)

  const currencies = [
    {
      value: 'Vegetable',
      label: 'Vegetable',
    },
    {
      value: 'Fruit',
      label: 'Fruit',
    },
    {
      value: 'Frozen',
      label: 'Frozen Item',
    },
    {
      value: 'Dairy',
      label: 'Dairy item',
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "http://localhost:9999/product/create",
      data: productData,
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      }
    }).then((res) => {
      toast.success("Product Added Successfully")
    }).catch((err) => {
      toast.error(err.message)
    })

    setProductData({
      title: "",
      qty: "",
      images: "",
      category: "",
      price: "",
      description: "",
      discountPrice: "",
    })
  }
  return (
    <>
      <div className='addProduct'>
        <div className='d-flex align-items-center justify-content-between m-3'>
          <h4><span><Widgets /></span> Add Products</h4>
          <NavLink to={"/"}>
            <Button color='error' variant='outlined'><span><ArrowBack /></span> Back to Dashboard</Button>
          </NavLink>
        </div>
        <div className="productForm">
          <Box
            className='box'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Product Name"
              value={productData.title}
              onChange={(e) => setProductData({ ...productData, title: e?.target?.value })}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Product Qty"
              type='number'
              value={productData.qty}
              onChange={(e) => setProductData({ ...productData, qty: e?.target?.value })}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="Vegetable"
              // helperText=""
              value={productData.category}
              onChange={(e) => setProductData({ ...productData, category: e?.target?.value })}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box
            className='box'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '50%' },
            }}
            noValidate
            autoComplete="off"
          >
            <label htmlFor="">Choose an Image <ArrowForwardRounded /></label>
            <TextField
              hiddenLabel
              id="outlined-size-small"
              defaultValue=""
              type='url'
              value={productData.images}
              onChange={(e) => setProductData({ ...productData, images: e?.target?.value })}
            />
          </Box>

          <Box
            className='box'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-flexible"
              label="Price"
              type='number'
              value={productData.price}
              onChange={(e) => setProductData({ ...productData, price: e?.target?.value })}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Discount Price"
              type='number'
              value={productData.discountPrice}
              onChange={(e) => setProductData({ ...productData, discountPrice: e?.target?.value })}
            />
          </Box>


          <Box
            className='box'
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={4}
              value={productData.description}
              onChange={(e) => setProductData({ ...productData, description: e?.target?.value })}
            />
          </Box>
          <div className='d-flex align-items-center justify-content-center'>
            <Button className='mt-3' color='error' variant='outlined' onClick={(e) => submitHandler(e)}>Add Product</Button>
          </div>
        </div>
      </div>
    </>
  )
}

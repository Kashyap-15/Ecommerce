import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../ui/Pages/Home/Home'
import Error from '../ui/Pages/Error404/Error'
import Login from '../ui/Pages/Login/Login'
import Register from '../ui/Pages/Register/Register'
import Profile from '../ui/Pages/Profile/Profile'
import AddProduct from '../ui/Components/AddProduct/AddProduct'
import ProductTable from '../ui/Components/ProductTable/ProductTable'
import Users from '../ui/Components/Users/Users'

export default function RouterCom() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/addproducts' element={<AddProduct/>}/>
        <Route path='/products' element={<ProductTable/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}

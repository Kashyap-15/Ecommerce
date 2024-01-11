import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AdminRightSidebar from '../Pages/Admin/AdminComponents/AdminRightSidebar/AdminRightSidebar'
import ProductTable from '../Pages/Admin/AdminComponents/ProductTable/ProductTable'
import AdminUser from '../Pages/Admin/AdminComponents/AdminUsers/AdminUser'


export default function RouterCom() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<AdminRightSidebar/>}/>
            <Route path='/admin-products' element={<ProductTable/>}/>
            <Route path='/admin-users' element={<AdminUser/>}/>
            <Route path='/boat-truly-yours' element={<h1>boat Truly Yours</h1>}/>
            <Route path='/gift-with-boat' element={<h1>GIt with boat</h1>}/>
            <Route path='/corporate-orders' element={<h1>Corporate orders</h1>}/>
            <Route path='*' element={<h1>Error page</h1>}/>
        </Routes>
    </>
  )
}

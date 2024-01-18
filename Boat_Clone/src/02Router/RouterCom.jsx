import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import ProductTable from '../Pages/Admin/AdminComponents/ProductTable/ProductTable'
import AdminUser from '../Pages/Admin/AdminComponents/AdminUsers/AdminUser'
import Admin from '../Pages/Admin/Admin'
import Header from '../Components/Header/Header'
import UpperHead from '../Components/Header/UpperHead'
import { useSelector } from 'react-redux'
import UserProfile from '../Pages/UserProfile/UserProfile'
import AllProducts from '../Components/AllProducts/AllProducts'


export default function RouterCom() {
  const [personType, setpersonType] = useState("")
  let data = useSelector((state) => state.authReducer?.user)

  useEffect(() => {
    setpersonType(data.userType)
  }, [data])

  return (
    <>
      {
        personType !== "admin" && <> <UpperHead />
          <Header /> </>
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin-products' element={<ProductTable />} />
        <Route path='/admin-users' element={<AdminUser />} />
        <Route path='/boat-truly-yours' element={<h1>boat Truly Yours</h1>} />
        <Route path='/gift-with-boat' element={<h1>GIt with boat</h1>} />
        <Route path='/corporate-orders' element={<h1>Corporate orders</h1>} />
        <Route path='*' element={<h1>Error page</h1>} />
      </Routes>
    </>
  )
}



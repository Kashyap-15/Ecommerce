import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import RouterCom from './02Router/RouterCom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <RouterCom />
        <ToastContainer />
      </BrowserRouter>
      {/* <UploadImage /> */}
    </>
  )
}

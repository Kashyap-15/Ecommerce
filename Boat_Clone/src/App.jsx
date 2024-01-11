import React from 'react'
import Header from './Components/Header/Header'
import UpperHead from './Components/Header/UpperHead'
import Admin from './Pages/Admin/Admin'
import { BrowserRouter } from 'react-router-dom'
import RouterCom from './02Router/RouterCom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  let type = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <BrowserRouter>
      {
        (type?.userType==="admin") ? <>
        <Admin/>
        </> :
        <>
        <UpperHead/>
        <Header/>
        <RouterCom/>
        </>
      }
      <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

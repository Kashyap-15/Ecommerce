import React from 'react'
import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import RouterCom from './Router/RouterCom'
import Header from './ui/Components/Header/Header'
import { ToastContainer } from 'react-toastify'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <RouterCom/>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}
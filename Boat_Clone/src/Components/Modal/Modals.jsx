import React, { useState } from 'react'
import "./Modal.css"
import { Button, Modal } from 'react-bootstrap';
import LoginCom from '../../Pages/Login/LoginCom';


export default function Modals({show,setShow}) {

  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Let's Go, bo<span style={{color:"#ff0000"}}>A</span>thead!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginCom/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

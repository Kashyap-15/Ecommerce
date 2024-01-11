import React, { useState } from 'react'
import "./Modal.css"
import { Modal } from 'react-bootstrap';
import LoginCom from '../../Pages/Login/LoginCom';
import Register from '../../Pages/Register/Register';


export default function Modals({show,setShow}) {
  let [flag,setFlag] = useState(true)

  return (
    <>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Let's Go, bo<span style={{color:"#ff0000"}}>A</span>thead!</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalBody'>
          {
          flag ? <LoginCom setShow={setShow}/> : <Register setShow={setShow}/>
          }
        </Modal.Body>
        <Modal.Footer>
          {
            flag ? 
          <div className='ToggleBtn' onClick={()=>setFlag(!flag)}>
            New Here?..Be a bo<span style={{color:"#ff0000"}}>A</span>thead
          </div> :
          <div className='ToggleBtn' onClick={()=>setFlag(!flag)}>
            Already a bo<span style={{color:"#ff0000"}}>A</span>thead?
          </div>
          }
        </Modal.Footer>
      </Modal>
    </>
  )
}

import React, { useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function OffCanvas({toggle,setToggle}) {

  return (
    <>
      <div style={{ zIndex: "999" }}>
        <Offcanvas show={toggle} placement='end' onHide={()=>setToggle(false)}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>bo<span style={{color:"#ff0000"}}>A</span>thea's Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            eafbkjwef
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  )
}

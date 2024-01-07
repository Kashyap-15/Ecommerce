import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function OffCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      <div style={{zIndex:"999"}}>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
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

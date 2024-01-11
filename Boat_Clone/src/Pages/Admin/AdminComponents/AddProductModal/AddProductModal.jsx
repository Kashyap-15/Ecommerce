import React from 'react'
import "./AddProductModal.css"
import { Button, Modal } from 'react-bootstrap'

export default function AddProductModal({show,setShow}) {

  return (
    <div className='addProductModal'>
        
      <Modal show={show} onHide={()=>setShow(!show)}>
        <Modal.Header closeButton>
          <Modal.Title>Add the bo<span style={{ color: "#ff0000" }}>A</span>t Product Here.....</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="addProductDiv">
                <form action="#">
                    <div>
                        <div className="addProductInput">
                            <label className='addProductLabel' htmlFor="">Enter Product Name</label>
                            <input className='addProductInputBar' type="email" placeholder='EmailAddress@gmail.com'
                            />
                        </div>
                        <div className="addProductInput">
                            <label className='addProductLabel' htmlFor="">Enter Your Password</label>
                            <input className='addProductInputBar' type="Password" placeholder='Password@123'
                            />
                        </div>
                        <div className="loginButtonDiv">
                            <span className='LoginButton'>Add This Gem</span>
                        </div>
                    </div>
                </form>
            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}





// {
// 	"status": 200,
// 	"data": {
// 		"images": [],
// 		"category": [],
// 		"color": [
// 			"red",
// 			"black",
// 			"white"
// 		],
// 		"size": [
// 			"44",
// 			"45",
// 			"42",
// 			"43"
// 		],
// 		"isAvailable": true,
// 		"rating": 0,
// 		"totalRaters": 0,
// 		"totalSoldUnit": 0,
// 		"_id": "659e692823c15390d15565e6",
// 		"createdAt": "2024-01-10T09:53:44.448Z",
// 		"updatedAt": "2024-01-10T09:53:44.448Z",
// 		"__v": 0
// 	}
// }
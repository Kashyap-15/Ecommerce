import React, { useState } from 'react'
import "./ProductTable.css"
import { Button, Table } from 'react-bootstrap'
import AddProductModal from '../AddProductModal/AddProductModal';

export default function ProductTable() {
  const [show, setShow] = useState(false);
  return (
    <>
      <AddProductModal show={show} setShow={setShow} />
      <div className='productTable'>
        <div className='productTableTitle'>
          <h1 className='productTableTitleH1'>bo<span style={{ color: "#ff0000" }}>A</span>t Products</h1>
          <div className='productTableTitleBtn' variant="dark" onClick={() => setShow(!show)}>
            Add Product
          </div>
        </div>
        <hr />
        <div className='productTableDiv'>
          <Table striped bordered hover variant="light">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr> 
            </tbody>
          </Table>
        </div>
      </div>
    </>
  )
}

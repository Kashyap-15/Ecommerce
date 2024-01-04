import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import AddProduct from '../AddProduct/AddProduct';

export default function AddModal({ pagination, setPagination }) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Add Products
            </Button>
            <Modal fullscreen={true} isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add Product</ModalHeader>
                <ModalBody>
                    <AddProduct setModal={setModal} modal={modal} setPagination={setPagination} pagination={pagination} />
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

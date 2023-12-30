import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default function AdminModal({ modal, setModal }) {
    const [product, setProduct] = useState("")
    let [searchParams] = useSearchParams()
    useEffect(() => {
        const id = searchParams.get("id")
        axios({
            method: "get",
            url: `http://localhost:9999/product/getProductById/${id}`,
        }).then((res) => {
            setProduct(res?.data?.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [location.search])
    return (
        <>
            <div>
                <Modal isOpen={modal} onClick={() => setModal(!modal)}>
                    <ModalBody>
                        <h1>{product?.title}</h1>
                        <div className='img'>
                            <img className='rounded-3 mb-2' src={product?.images} alt="Image Preview" />
                        </div>
                        <div>
                            <h4>
                                categories : {product?.category}
                            </h4>
                            <h6>
                                price : {product?.price}
                            </h6>
                            <p>
                                Description : {product?.description}
                            </p>
                            <p>
                                Box Size :
                                {[41, 42, 43, 44, 45].map?.((ele, i) => {
                                    return <span key={i}>{ele}-</span>;
                                })}
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => setModal(!modal)}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}

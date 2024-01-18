import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button, Input } from 'reactstrap'
import { BE_URL } from './DataForImages'

export default function UploadImage() {
    const [img, setImg] = useState("")


    const uploadImage = () => {
        const formData = new FormData()
        formData.append("avatar", img)
        axios.post(
            `${BE_URL}/user/upload`,
            formData,
        ).then((res) => {
            console.log(res.data)
            toast.success("Product Added Successfully")
        }).catch((err) => {
            toast.error(err.message)
        })
    }
    return (
        <div>

            <Input type='file' onChange={(e) => setImg(e.target?.files[0])} />
            <Button onClick={() => uploadImage()}>
                upload
            </Button>
        </div>


    )
}

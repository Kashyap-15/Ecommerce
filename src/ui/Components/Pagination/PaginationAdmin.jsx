import React, { useEffect, useState } from 'react'
import "./Pagination.css"
import { Pagination } from 'reactstrap';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material';


export default function PaginationAdmin({ setPagination, page, limit, pageLimit }) {

    let [pageArr, setPageArr] = useState([1, 2, 3, 4, 5])
    let [pageCount, setPageCount] = useState(pageLimit)


    useEffect(() => {
        setPageCount(pageLimit)
    }, [pageLimit])
    useEffect(() => {
        if ([pageCount - 2, pageCount - 1, pageCount].includes(page)) {
            let arr = [
                pageCount - 4,
                pageCount - 3,
                pageCount - 2,
                pageCount - 1,
                pageCount
            ];
            setPageArr(arr)
        } else if (page > 3) {
            let arr = [page - 2, page - 1, page, page + 1, page + 2];
            setPageArr(arr)
        } else if (page < 3) {
            let arr = [1, 2, 3, 4, 5];
            setPageArr(arr)
        }
    }, [page, pageLimit, pageCount])


    return (
        <>
            <div>
                <Pagination aria-label="Page navigation example">
                    <div className='PageArrow'  >
                        <div className='FirstPage' onClick={() => setPagination({ limit, page: 1 })} > <KeyboardDoubleArrowLeft /> </div>
                    </div>
                    {pageArr?.map?.((e, i) => {
                        return (
                            <div className='pagesDiv' key={i}>
                                <div className='page' onClick={() => setPagination({ limit, page: e })} >
                                    {e}
                                </div>
                            </div>
                        );
                    })}
                    <div className='PageArrow'  >
                        <div className='FirstPage' onClick={() => setPagination({ limit, page: pageCount })} > <KeyboardDoubleArrowRight /> </div>
                    </div>
                </Pagination>
            </div>
        </>
    )
}

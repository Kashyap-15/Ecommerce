import React, { useEffect, useState } from 'react'
import "./PaginationCom.css"
import { Pagination } from 'react-bootstrap'

export default function PaginationCom({pageLimit,limit,page,setPagination}) {

    const [pageArr, setPageArr] = useState([1, 2, 3, 4, 5])
    const [pageCount, setPageCount] = useState(pageLimit)
    

    useEffect(()=>{
        setPageCount(pageLimit)
    },[pageLimit])

    useEffect(()=>{
        if([pageCount-2,pageCount-1,pageCount].includes(page)){
            let arr = [
                pageCount-4,
                pageCount-3,
                pageCount-2,
                pageCount-1,
                pageCount
            ]
            setPageArr(arr)
        }
        else if(page>3){
            let arr = [page-2,page-1,page,page+1,page+2]
            setPageArr(arr)
        }
        else if (page<3){
            setPageArr([1,2,3,4,5])
        }
    },[page,pageLimit,pageCount])

    return (
        <div className='paginationCom'>
            <Pagination>
                <Pagination.First onClick={()=>setPagination({page:1,limit})}/>
                {
                    pageArr?.map((e, i) => {
                        return <div className='pagesDiv' key={i} onClick={()=>setPagination({page:e,limit})}>
                            <div className='page' >
                                {e}
                            </div>
                        </div>
                    })
                }
                <Pagination.Last onClick={()=>setPagination({page:pageCount,limit})} />
            </Pagination>
        </div>
    )
}

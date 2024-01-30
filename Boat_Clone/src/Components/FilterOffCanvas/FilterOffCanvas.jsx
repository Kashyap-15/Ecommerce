import React, { useState } from 'react'
import "./FilterOffCanvas.css"
import { Col, Offcanvas, Row } from 'react-bootstrap'
import Select from "react-select";
import { Box, Slider } from '@mui/material';


export default function FilterOffCanvas({setShow,show,AllproductFilter,AllproductsetFilter}) {
    const [filter, setFilter] = useState(AllproductFilter)
    
    const [value, setValue] = useState([500, 2000]);
    
    let sIze = ["Small","Medium","Large"]
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setFilter({...filter,price:{...filter.price,lt:newValue[1],gt:newValue[0]}})
    };
    
    const sizeCheckboxHandler = (sizeVal)=>{
        let match = filter?.size?.includes(sizeVal)
        if(match){
            let newArr = filter?.size?.filter((e)=>e !== sizeVal);
            setFilter({...filter,size:newArr})
        } else {
            let newSizeArr = [...filter?.size,sizeVal]
            setFilter({...filter,size:newSizeArr})
        }
    }
    
    const applyFilter = ()=>{
        AllproductsetFilter(filter)
        setShow(!show)
    }

    const categoryOptions = [
        { value: 'Airpodes', label: 'Airpodes' },
        { value: 'Speakers', label: 'Speakers' },
        { value: 'wired Earphones', label: 'wired Earphones' },
    ];
    
      const colorOptions = [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
        { value: 'gray', label: 'Gray' },
        { value: 'lightblue', label: 'SkyBlue' },
        { value: 'black', label: 'Black' },
        { value: 'white', label: 'White' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'pink', label: 'Pink' },
        { value: 'brown', label: 'Coffee' },
        { value: 'lightgreen', label: 'LightGreen' },
      ];

  return (
    <>
      <Offcanvas show={show} onHide={()=>setShow(!show)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='filterBody'>
            <div className='filterMain'>
                <div className='filterApply'>
                <button className='filterApplyBtn' onClick={()=>applyFilter()}>Apply Filter</button>
                </div>
                <Row>
                    <Col className='col-12'>
                    <label className='filterLabel' htmlFor=""><b>Catergories</b></label>
                    <Select
                        options={categoryOptions}
                        isMulti
                        onChange={(e)=>setFilter({...filter,category:e?.map((ele)=>ele.value),
                        })
                    }
                    />
                    </Col>
                    <Col className='col-12'>
                        <label  className='filterLabel' htmlFor=""><b>Price</b></label>
                        <div className='filterCount'><span className='filterCountBox'>{value[0]}</span>to<span className='filterCountBox'>{value[1]}</span></div>
                        <Box sx={{ width: 350 }}>
                        <Slider
                            min={200}
                            max={15000}
                            value={value}
                            onChange={handleChange}
                        />
                        </Box>
                    </Col>
                    <Col className='col-12'>     
                        <label  className='filterLabel' htmlFor=""><b>Color</b></label>
                        <Select
                        options={colorOptions}
                        isMulti
                        closeMenuOnSelect={false}
                        onChange={(e)=>setFilter({...filter,color:e?.map((ele)=>ele.value),
                            })
                        }
                         />
                    </Col>
                    <Col className='col-12'>     
                        <label  className='filterLabel'><b>Size</b></label>
                        {
                            sIze.map((ele,i)=>{
                                return <div key={i} className='filterSize'>
                                    <input type="checkbox" checked={filter?.size?.includes(ele)} onChange={()=>sizeCheckboxHandler(ele)} />
                                    <span>{ele}</span>
                                </div>
                            })
                        }
                    </Col>
                    <Col className='col-12'>     
                        <div className='filterLabel'><b>Gender</b></div>
                        <span className='filterGender'>
                        <input type="radio" name='gen' value="male" checked={filter.gender==="male"} onChange={(e)=>setFilter({...filter,gender:e?.target?.value})} />
                        <label htmlFor="">Male</label>
                        </span>
                        <span className='filterGender'>
                        <input type="radio" name='gen' value="female" checked={filter.gender==="female"} onChange={(e)=>setFilter({...filter,gender:e?.target?.value})}/>
                        <label htmlFor="">Female</label>
                        </span>
                        <span className='filterGender'>
                        <input type="radio" name='gen' value="other" checked={filter.gender==="other"} onChange={(e)=>setFilter({...filter,gender:e?.target?.value})}/>
                        <label htmlFor="">Other</label>
                        </span>
                    </Col>
                </Row>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

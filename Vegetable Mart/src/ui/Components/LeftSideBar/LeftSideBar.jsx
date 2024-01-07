import React, { useState } from 'react'
import "./LeftSideBar.css"



export default function LeftSideBar() {
    let name = "BCD"
    name.to
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
            <div className="cetegories">
                <h4 className='title'>Filter</h4>
                <div className='hr'>
                    <span className='red'></span>
                    <span className='white'></span>
                </div>
                <div className="categoriesDiv">
                    
                </div>
            </div>
    )
}

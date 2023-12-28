import React, { useState } from 'react'
import "./LeftSideBar.css"
import { Accordion, AccordionBody, AccordionHeader, AccordionItem} from 'reactstrap'


export default function LeftSideBar() {
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
                <h4 className='title'>Top Categories</h4>
                <div className='hr'>
                    <span className='red'></span>
                    <span className='white'></span>
                </div>
                <ul className='categoriesList'>
                    <Accordion open={open} toggle={toggle} >
                        <AccordionItem className='accordianTgl'>
                            <AccordionHeader targetId="1">Vegetables</AccordionHeader>
                            <AccordionBody accordionId="1">
                                <li className='list'>Leafy greens</li>
                                <li className='list'>Cruciferous vegies</li>
                                <li className='list'>Root vegies</li>
                                <li className='list'>Nightshades</li>
                                <li className='list'>Legumes</li>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="2">Fruits</AccordionHeader>
                            <AccordionBody accordionId="2">
                                <li className='list'>Citrus fruits</li>
                                <li className='list'>Stone fruits</li>
                                <li className='list'>Tropical fruits</li>
                                <li className='list'>Melons</li>
                                <li className='list'>Berries</li>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">Frozen</AccordionHeader>
                            <AccordionBody accordionId="3">
                                <li className='list'> Frozen Leafy greens</li>
                                <li className='list'> Frozen Cruciferous vegies</li>
                            </AccordionBody>
                        </AccordionItem>
                    <AccordionItem>
                        <AccordionHeader targetId="4">Dairy</AccordionHeader>
                        <AccordionBody accordionId="4">
                            <li className='list'>Milk</li>
                            <li className='list'>Paneer</li>
                            <li className='list'>Chess</li>
                            <li className='list'>Butter Milk</li>
                            <li className='list'>Curd</li>
                        </AccordionBody>
                    </AccordionItem>
                    </Accordion>
                </ul>
                <h4 className='title'>Vegetables</h4>
                <div className='hr'>
                    <span className='red'></span>
                    <span className='white'></span>
                </div>
                <ul className='categoriesList'>
                    <li className='list'>Leafy greens</li>
                    <li className='list'>Cruciferous vegies</li>
                    <li className='list'>Root vegies</li>
                    <li className='list'>Nightshades</li>
                    <li className='list'>Legumes</li>
                </ul>
                <h4 className='title'>Fruits</h4>
                <div className='hr'>
                    <span className='red'></span>
                    <span className='white'></span>
                </div>
                <ul className='categoriesList'>
                    <li className='list'>Citrus fruits</li>
                    <li className='list'>Stone fruits</li>
                    <li className='list'>Tropical fruits</li>
                    <li className='list'>Melons</li>
                    <li className='list'>Berries</li>
                </ul>
            </div>
    )
}

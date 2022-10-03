import React, { useState } from 'react'
import './testimonials.css'
import { testimonialsData } from './TestimonialsData'
import Arrowleft from '../assets/leftArrow.png'
import ArrowRight from '../assets/rightArrow.png'

import {motion} from 'framer-motion'

const Testimonial = () => {
  const transition = {type : "spring", duration: 3}

    const [selectData, setSelectData] = useState(0)
    const tlength = testimonialsData.length;
  return (
    <div className='testimonial_top' id='test'>
        <div className='left-t'>
            <span>Testimonial</span>
            <span className='stroke-text'>WHAT THEY</span>
            <span>SAY ABOUT US</span>
            <span>
                {testimonialsData[selectData].review}
            </span>
            <span >
                <span style={{color: "var(--orange)"}}>{testimonialsData[selectData].name}</span>{" "}
                -- <span>{testimonialsData[selectData].status}</span>
            </span>
        </div>
        <div className='right-t'>
            <motion.div
                initial={{opacity: 0, x: -100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
                ></motion.div>
            <motion.div
                initial={{opacity: 0, x: 100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
                ></motion.div>
            <img src={testimonialsData[selectData].image} alt="error loading"/>

            <div className='arrows'>
                <img 
                    onClick={()=>{
                        selectData===0 ? setSelectData(tlength-1) 
                        : setSelectData((prev)=> prev-1)
                    }}
                        src={Arrowleft} alt="error loading"/>
                <img 
                    onClick={()=>{
                        selectData===tlength-1 ? setSelectData(0)
                        : setSelectData((prev)=> prev+1)
                    }}
                        src={ArrowRight} alt="error loading"/>
            </div>
        </div>
    </div>
  )
}

export default Testimonial

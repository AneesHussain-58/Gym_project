import React from 'react'
import './gymcard.css'
import image01 from '../assets/image1.png'
import image02 from '../assets/image2.png'
import image03 from '../assets/image3.png'
import image04 from '../assets/image4.png'
import image05 from '../assets/nb.png'
import image06 from '../assets/adidas.png'
import image07 from '../assets/nike.png'
import image08 from '../assets/tick.png'

const GymCards = () => {
  return (
    <div className='gym_data' id='gym_data'>
      <div className='left-r'>
        <img src={image01} alt="error loading"/>
        <img src={image02} alt="error loading"/>
        <img src={image03} alt="error loading"/>
        <img src={image04} alt="error loading"/>
      </div>

      <div className='right-r'>
        <span> Some Reasons</span>

        <div>
            <span className='stroke-text'>Why </span>
            <span>Choose us</span>
        </div>

        {/* Gym Right side details */}
        <div className='right_side_details'>
            <div>
                <img src={image08} alt="error loading"/>
                <span>OVER 140+ EXPERT COACHS</span>
            </div>
            <div>
                <img src={image08} alt="error loading"/>
                <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
            </div>
            <div>
                <img src={image08} alt="error loading"/>
                <span>1 FREE PROGRAM FOR NEW MEMBER</span>
            </div>
            <div>
                <img src={image08} alt="error loading"/>
                <span>RELIABLE PARTNERS</span>
            </div>
        </div>
        <span 
            style={{
                color: "var(--orange)",
                fontWeight: "normal"
            }}
            >
                OUR PARTNERS
        </span>
        <div className='bottom_images'>
            <img src={image05} alt="error loading"/>
            <img src={image06} alt="error loading"/>
            <img src={image07} alt="error loading"/>
        </div>
      </div>
    </div>
  )
}

export default GymCards

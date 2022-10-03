import React from 'react'
import Header from '../header/Header'
import './hero.css'
import image01 from '../../assets/hero_image.png'
// import {Men} from '../../images/men.png'
import image02 from '../../assets/hero_image_back.png'
import image03_heart from '../../assets/heart.png'
import image04_calories from '../../assets/calories.png'

// import motion framer library for animation
import {motion} from 'framer-motion'


export const Hero = () => {
  const transition = {type : "spring", duration: 3}
  return (
    <div className='hero' id='hero'>
      <div className='blur top_blur-section'></div>
        <div className='left-side'>
          <Header />

          <div className='best-top-text'>
            <motion.div
              initial = {{left: "234px"}}
              whileInView = {{left: "10px"}}
              transition = {{...transition, type: "tween"}}
            ></motion.div>
            <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          </div>

          <div className='hero_main_text'>
            <div>
              <span className='stroke-text'>Make</span>
              <span>  your</span>
            </div>
            <div>
              <span>healthy body</span>
            </div>
            <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
          </div>
          {/* Counting the numbers section starts from here */}
        <div className='numbers_section'>
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* Buttons section */}
        <div className='top_btn_section'>
          <button className='btn'>Get Started</button>
          <button className='btn'>Learn More</button>
        </div>
        </div>

        
        <div className='right-side'>
          <button className='btn'>Join Now</button>

          <motion.div
            initial={{right: "-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}

           className='heart_beat'>
            <img src={image03_heart} alt="error loading"/>
            <span>Heart Rate</span>
            <span>114bmp</span>
          </motion.div>
          {/* Images section  */}
          <img src={image01} alt="" className='men_img'/>
          <motion.img 
            initial={{right: "11rem"}}
            whileInView={{right: "20rem"}}
            transition={transition}
            src={image02} alt="" className='radiation_img'/>

          {/* Calories data section */}
          <motion.div 
            initial={{right: "37rem"}}
            whileInView={{right: "28rem"}}
            transition={transition}
            className='calories_data'>
            <img src={image04_calories} alt=""/>
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>

        </div>
    </div>
  )
}

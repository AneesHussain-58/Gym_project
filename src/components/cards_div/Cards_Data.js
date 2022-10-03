import React from 'react'
import './cards_data.css'
import {Card_Data_File} from './Card_data_File'
import RightArrow from '../../assets/rightArrow.png'


export const Cards_Data = () => {
  return (
    <div className='cards_data' id='cards_data'>
        {/* Cards data section */}
        <div className='card_header'>
            <span className='stroke-text'>EXPLORE OUR</span>
            <span>PROGRAMS</span>
            <span className='stroke-text'>TO SHAPE YOU</span>
        </div>

        {/* Cards Data fetching from Card_Data_File */}
        <div className='cards'>
            {Card_Data_File.map((cardData, i)=>{
                return(
                <div className='display_data' key={i}>
                    {cardData.image}
                    <span>{cardData.heading}</span>
                    <span>{cardData.details}</span>
                    <div className='card_display'>
                        <span>Join Now</span>
                        <img src={RightArrow} alt="error loading"/>
                    </div>
                </div>
                )
            })}
        </div>
    </div>
  )
}

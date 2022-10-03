import React from 'react'
import {PaymentData} from './PaymentData.js'
import image_tick from '../assets/whiteTick.png'
import './paymentcard.css'

export const PaymentCard = () => {
  return (
    <div className='paymentCards'>
        <div className='blur payment-blur1'></div>
        <div className='blur payment-blur2'></div>
        <div className='paymentData' style={{gap: "2rem"}}>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>

        {/* PaymentData is fetching here */}
        <div className='cardData'>
            {PaymentData.map((data, i)=>{
                return(
                    <div className='payData' key={i}>
                        {data.icon}
                        <span>{data.name}</span>
                        <span>$ {data.price}</span>

                        <div className='featurs'>
                            {data.features.map((display, i)=>{
                                return(
                                    <div className='featureData' key={i}>
                                        <img src={image_tick} alt="error loading"/>
                                        <span key={i}>{display}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            <span>See more benefits</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

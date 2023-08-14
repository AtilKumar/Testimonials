import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Card(props) {
    let review = props.review
    return (
        <div className='w-full max-w-lg mx-auto'>
            <div className='flex flex-col items-center justify-center gap-4 '>
                <img className='w-28 h-28 rounded-full absolute top-[-5%] left-[5%] z-[3]' src={review.image} alt=' ' />
                <div className='w-28 h-28 rounded-full absolute top-[-6%] left-[6%] bg-purple-500 z-[2]'></div>
                <div className=' flex flex-col justify-center items-center'>
                <p className='font-bold text-lg tracking-wide'>{review.name}</p>
                <p className='text-purple-500'>{review.job}</p>
                </div>
                <FaQuoteLeft className='text-purple-500'/>
                <p>{review.text}</p>
                <FaQuoteRight className='text-purple-500'/>               
            </div>
        </div>
    )
}

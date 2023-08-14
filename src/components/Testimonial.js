import React, { useState } from 'react'
import Card from './Card'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function Testimonial(props) {
  let review = props.review
  const [indx, setIndx] = useState(0)
  const leftClickHandler = () =>{
    if(indx-1 < 0){
      setIndx(review.length - 1)
    }else{
      setIndx(indx - 1)
    }
  }
  const rightClickHandler = () =>{
    if(indx+1 >= review.length){
      setIndx(0)
    }
    else{
      setIndx(indx+1)
    }
  }
  const surpriseHandler = () =>{
    let val = Math.floor(Math.random()*review.length)
    setIndx(val)
  }

  return (
    <div className='p-8 bg-white relative flex flex-col items-center justify-center gap-4 h-[60vh] hover:shadow-xl '>
      <Card review={review[indx]} />

      <div className='flex justify-center gap-4'>
        <button onClick={leftClickHandler}>
          <FaChevronLeft className='text-purple-500' />
        </button>
        <button onClick={rightClickHandler}>
          <FaChevronRight className='text-purple-500' />
        </button>
      </div>

      <button className='bg-purple-500 text-white px-3 py-1 hover:bg-purple-700 ease-in-out transition-colors ' onClick={surpriseHandler}>
        Surprise me
      </button>
    </div>
  )
}

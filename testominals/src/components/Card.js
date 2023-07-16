import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function Card(props) {
    let reviews = props.reviews;
  return (
    <div className='flex flex-col md:relative'>
      <div className='relative md:absolute md:top-[-7rem] z-[10] mx-auto'>
        <img src={reviews.image} alt="" className='aspect-square rounded-full w-[140px] h-[140px] z-40 object-cover sticky'/>
        <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-30 left-[10px]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='font-bold text-2xl capitalize tracking-wider	'>{reviews.name}</p>
        <p className='text-violet-300 uppercase'>{reviews.job}</p>
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteLeft />
      </div>

      <div className='text-center mt-4 text-slate-500'>
        <p>{reviews.text}</p>
      </div>

      <div className='text-violet-400 mx-auto mt-5'>
        <FaQuoteRight />
      </div>


    </div>
  )
}

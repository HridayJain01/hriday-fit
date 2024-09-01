import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
      <div className='flex flex-col gap-4'>
        <p>ITS TIME TO GET</p>
        <h1 className='uppercase font-semibold text-4xl 
        sm:text-5xl md:text-6xl lg:text-7xl'>Hriday<span className='text-blue-400'>Maximus</span></h1>
      </div>
        <p className='text-sm md:text-base font-light'>HridayFit: Your go-to gym for <span className='text-blue-400 font-medium'>maximum transformation.</span>Expert trainers, cutting-edge technology, and a motivating community await you!</p>
        <button className='px-8 py-4 rounded-md border-blue-400 border-solid border-[2px] blueShadow duration-200'>
          <p>Accept Begin</p>
        </button>
      </div>
  )
}

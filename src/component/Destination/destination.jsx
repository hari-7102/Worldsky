import React from 'react'

const destination = () => {
  return (
    <div className='px-16 py-10'>
        <p className='text-7xl font-serif'>Explore the Popular Destination</p>
        <p className='text-6xl mt-2 font-serif  '>With <span className='text-blue-600'> WorldSky</span></p>

        <p className='text-6xl font-semibold mt-6'>Italy Tourism</p>

        <div className='grid grid-cols-4 mt-10 grid-rows-4 gap-3.5'>
            <p className='bg-amber-600 h-64 w-full col-span-2  rounded-2xl '></p>
            <p className='bg-amber-600 h-64 w-full col-span-1 rounded-2xl   '></p>
            <p className='bg-amber-600 h-64 w-full col-span-1  rounded-2xl   '></p>
            <p className='bg-amber-600 h-64 w-full col-span-1  rounded-2xl   '></p>
            <p className='bg-amber-600 h-64 w-full col-span-3  rounded-2xl   '></p>
            <p className='bg-amber-600 h-64 w-full col-span-3  rounded-2xl   '></p>
            <p className='bg-amber-600 h-64 w-full col-span-1  rounded-2xl   '></p>
        </div>
    </div>
  )
}

export default destination
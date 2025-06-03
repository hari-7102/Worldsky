import React from 'react'
import River from "../assets/river.jpeg"
const Travel = () => {
  return (
    <div className='flex flex-wrap w-full lg:flex-nowrap justify-center py-28'>

        <div className='md:w-1/2 w-full flex justify-center'>
            <img src={River} alt="" className='w-80 h-auto rounded-3xl'/>
        </div>

        <div className='md:w-1/2 px-4  w-full   flex-col   flex-wrap lg:flex-nowrap flex justify-start gap-1.5 px-auto'>
            <p className='text-5xl font-serif   '>Travelling make you Rich</p>
            <p className='text-5xl  font-serif    '>in Stories and Experiences,</p>
            <p className='text-5xl  font-serif   '>and Memories</p>
        
        <div className='text-gray-600 mt-3.5 text-sm'>
            <p>Each step of the Journey brings unique stories to tell,valuable</p>
            <p>lesson form various experience</p>
        </div>
        <div className='py-7' >
            <div className='flex gap-48 items-center '>
                <p className='text-4xl font-semibold'>95%</p>
                <p>Customer <br /> Satisfcation</p>
            </div>
            <hr class="border-t-2 w-[23rem] my-4 border-gray-200 " />
            <div className='flex gap-48 items-center '>
                <p className='text-4xl font-semibold'>80+</p>
                <p>Popular <br /> Destination</p>
            </div>
            <hr class="border-t-2 w-[23rem] my-4 border-gray-200 " />
            <div className='flex gap-44 items-center '>
                <p className='text-4xl font-semibold'>250+</p>
                <p>Experience <br /> Guide</p>
            </div>
            <hr class="border-t-2 w-[23rem] my-4 border-gray-200 " />
        </div>
        </div>
    </div>
  )
}

export default Travel
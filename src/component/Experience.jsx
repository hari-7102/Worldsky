import React from 'react'
import { MapPin } from 'lucide-react';
const Experience = () => {
  return (
    <div className='bg-gray-100 py-12 mx-auto  '>
        <div className="text-center text-5xl font-medium bg-gradient-to-r from-gray-600 to-neutral-500  bg-clip-text text-transparent">
            <p>Experience Our Destination</p>       
        </div>


        <div className='grid grid-cols-3 grid-rows-3 gap-3  mx-auto max-w-5xl mt-20'>
          <div className='bg-[url("https://images.pexels.com/photos/19196727/pexels-photo-19196727/free-photo-of-a-mountain-range-with-trees-and-clouds-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] h-60 rounded-2xl col-span-2 relative'>
            <div className='absolute  text-2xl text-white bottom-5 left-7'>
              <p>Mountain Borowe</p>
              <div className='flex gap-1 items-center'>
                <MapPin  size={18}/>
                <p className='text-base'>Indonesia</p>
              </div>
            </div>
          </div>
          <div className='bg-[url("https://images.pexels.com/photos/19161510/pexels-photo-19161510/free-photo-of-a-view-of-snow-covered-mountains-with-trees.jpeg?auto=compress&cs=tinysrgb&w=600")] relative h-60 rounded-2xl  col-span-1'>
                        <div className='absolute  text-2xl text-white bottom-5 left-7'>
              <p>Mountain Borowe</p>
              <div className='flex gap-1 items-center'>
                <MapPin  size={18}/>
                <p className='text-base'>Indonesia</p>
              </div>
            </div>
          </div>
          <p className='bg-amber-900 h-60 rounded-2xl  col-span-3'></p>
          <p className='bg-amber-900 h-60 rounded-2xl  col-span-1'></p>
          <p className='bg-amber-900 h-60 rounded-2xl  col-span-2'></p>

        </div>

        {/* <div className="grid grid-cols-2 gap-6 items-center mt-11 mx-auto max-w-4xl ">
          <div className='relative'>
          <img
            src="https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-xl  w-[44rem] h-60"
          />
          <div className='flex-col gap-4 absolute bottom-3 left-3'>
          <p className=' text-black text-2xl font-semibold '>Mountain Brown</p>
          <div className='flex  gap-2 items-center '>
          <MapPin  size={15} className=' '/>
          <p className=''>Indonesia</p>
          </div>
          </div>
          </div>
          <div className='relative'>
          <img
            src="https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="rounded-xl w-[2rem] h-60  "
          />
          <div className='flex-col gap-4 absolute bottom-3 left-3'>
          <p className=' text-black text-2xl font-semibold '>Mountain Brown</p>
          <div className='flex  gap-2 items-center '>
          <MapPin  size={15} className=' '/>
          <p className=''>Indonesia</p>
          </div>
          </div>
          </div>
        </div> */}

        {/* <div className='grid grid-cols-1 justify-center items-center max-w-4xl mt-3 mx-auto'>
          <div className='bg-[url("https://images.pexels.com/photos/15488513/pexels-photo-15488513/free-photo-of-the-building-is-lit-up-at-night-with-a-clock-tower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")] bg-center'>
          <p className='py-28'>Harihatana</p></div>
        </div> */}



        

    </div>
  )
}

export default Experience
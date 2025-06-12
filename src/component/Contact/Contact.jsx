import React from 'react'
import { PhoneOutgoing } from 'lucide-react';
import { MapPinHouse } from 'lucide-react';
const Contact = () => {
  return (
    <div className='md:px-20 px-5  py-4  md:py-11 flex flex-wrap lg:flex-nowrap'>
        <div className='md:w-1/2  w-full  '>
           <p className='md:text-6xl  text-5xl     text-black font-serif'>Book a Journey </p> 
           <p className=' text-4xl   md:text-5xl text-black mt-2 font-serif'>with <span  className='text-blue-600'> WorldSky</span> </p> 
        

        <div className='flex items-center gap-5 mx-3.5 mt-12'>
            <PhoneOutgoing  size={37} className='rounded-lg bg-blue-600 text-white p-2'/>
            <div className='text-lg flex-col '>
                <p className='text-xl text-black'>Call Us : +91 845815285....</p>
                <p className='text-gray-500' >available on 8 Am to 6 Pm</p>
            </div>

        </div>

        <div className='flex items-center gap-5 mx-3.5 mt-12'>
            <PhoneOutgoing  size={37} className='rounded-lg bg-blue-600 text-white p-2'/>
            <div className='text-lg flex-col '>
                <p className='text-xl text-black'>Email</p>
                <p className='text-gray-500'>hariharanbhavani28@gmail.com</p>
            </div>

        </div>
        <div className='flex items-center gap-5 mx-3.5 mt-12'>
            <MapPinHouse  size={37} className='rounded-lg bg-blue-600 text-white p-2'/>
            <div className='text-lg flex-col '>
                <p className='text-xl text-black'>Address</p>
                <p className='text-gray-500'>Coimbatore , TamilNadu</p>
                <p className='text-gray-500'></p>
            </div>

        </div>

        </div>

        <div className='md:w-1/2 md:px-14     w-full md:py-0 py-16 '>
            <div className='border focus:border-gray-700        border-gray-300 rounded-2xl p-7'>
                <p className='text-blue-600 text-4xl font-medium '>Get In Touch</p>
                <input type="text" 
                name="" 
                id="" 
                placeholder='Name'
                className='border border-gray-300 rounded-md mt-6 w-full px-5 py-2 pe- placeholder:text-gray-500'
                />
                <input type="email" 
                name="" 
                id="" 
                placeholder='Email'
                className='border border-gray-300 rounded-md mt-6 w-full px-5 py-2 pe- placeholder:text-gray-500'
                />
                <input type="phone" 
                name="" 
                id="" 
                placeholder='Phone Number'
                className='border border-gray-300 rounded-md mt-6 w-full px-5 py-2 pe- placeholder:text-gray-500'
                />
                <textarea name="" id="" placeholder='How i Can help you ?' className='w-full h-44 p-3.5 mt-6 rounded-md border border-gray-300  placeholder:'>
                    
                </textarea>

                <button className='text-center w-full py-2 bg-blue-600 text-white rounded-lg mt-5'>Send Message ....</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
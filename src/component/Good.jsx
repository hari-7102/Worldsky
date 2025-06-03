import React from 'react'

const Good = () => {
  return (
    <div>
        <div className='text-center py-24'>
            <p className='text-5xl text-black'>Get a Good Travel Experience</p> 
            <div className='text-base text-gray-400 mt-4'>    
                <p>A good travel experience is not just about the pieces visited</p>
                <p>but also the stories and lessons brought back home</p>
            </div>
            <div className='flex justify-evenly items-center w-full  mt-7'>
                
                    <div className="relative w-full max-w-lg mx-auto mt-10">
                    <img
                        src="https://images.pexels.com/photos/32379779/pexels-photo-32379779/free-photo-of-nuwara-eliya-street-scene-on-a-misty-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Tourguide"
                        className="max-w-lg h-auto object-cover rounded-2xl"
                    />

                    <div className="absolute -right-11 -bottom-11 bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg w-48 text-center">
                        <p className="text-2xl font-semibold">Tourguide</p>
                        <p className="text-2xl font-semibold">Professional</p>

                        <div className="text-gray-500 text-sm mt-4">
                        <p>With in-depth knowledge</p>
                        <p>of the destination culture,</p>
                        <p>history, and local</p>
                        <p>attractions</p>
                        </div>

                        <p className="text-lg mt-4 font-semibold text-black hover:underline cursor-pointer">
                        Learn More →
                        </p>
                    </div>
                    </div>

                                   <div className="relative w-full max-w-lg mx-auto mt-10">
                    <img
                        src="https://images.pexels.com/photos/7542627/pexels-photo-7542627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Tourguide"
                        className="max-w-lg h-auto object-cover rounded-2xl"
                    />

                    <div className="absolute -right-11 -bottom-11 bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg w-48 text-center">
                        <p className="text-2xl font-semibold">Solid Travel</p>
                        <p className="text-2xl font-semibold">Group</p>

                        <div className="text-gray-500 text-sm mt-4">
                        <p>With in-depth knowledge</p>
                        <p>of the destination culture,</p>
                        <p>history, and local</p>
                        <p>attractions</p>
                        </div>

                        <p className="text-lg mt-4 font-semibold text-black hover:underline cursor-pointer">
                        Learn More →
                        </p>
                    </div>
                    </div>

            </div>
        </div>

        <div>

        </div>


    </div>
  )
}

export default Good
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { WobbleCard } from "../components/ui/wobble-card";
import FirstCardImage from '../assets/img4.jpeg'
const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Hero/> */}
        {/* <AboutUs/> */}
        <WobbleCardDemo />
    </div>
  )
}

export default Home


export function WobbleCardDemo() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2  px-11 py-2 xl:w-full">
     <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 lg:row-span-2 h-full  min-h-[500px] lg:min-h-[300px] bg-[url('https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        className=""
        >
        <div className="max-w-lg relative ">
            <h2 className="text-left text-balance text-base md:text-3xl lg:text-7xl font-semibold tracking-[-0.015em] text-white">
                Refreshing Exploration The world
            </h2>
            <p className="mt-4 text-left text-lg text-neutral-100">
            Journey beyond the ordinary advanture <span className='text-gray-800 font-medium'> trip</span>
            </p>
        </div>

  {/* <img
    src="/linear.webp"
    width={500}
    height={500}
    alt="linear demo image"
    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl z-0" */}
  {/* /> */}
</WobbleCard>

    <WobbleCard
        containerClassName="col-span-1 min-h-[300px] bg-[url('https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center  relative"
        >
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white relative ">
            No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 relative ">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
    </WobbleCard>
     <WobbleCard
  containerClassName="col-span-1 min-h-[300px] bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat relative"
>
  <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white relative z-10">
    No shirt, no shoes, no weapons.
  </h2>
  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 relative z-10">
    If someone yells “stop!”, goes limp, or taps out, the fight is over.
  </p>
</WobbleCard>
     <WobbleCard
//   containerClassName="col-span-1 min-h-[300px] bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat relative"
>
  <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black relative z-10">
    No shirt, no shoes, no weapons.
  </h2>
  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-black relative z-10">
    If someone yells “stop!”, goes limp, or taps out, the fight is over.
  </p>
</WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 bg-[url('https://images.pexels.com/photos/1448136/pexels-photo-1448136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat relative min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" /> */}
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat relative min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Signup for blazing-fast cutting-edge state of the art Gippity AI
            wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            With over 100,000 mothly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" /> */}
      </WobbleCard>
    </div>
  );
}


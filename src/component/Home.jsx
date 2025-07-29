import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { WobbleCard } from "../components/ui/wobble-card";
import FirstCardImage from '../assets/img4.jpeg'
import Section from './Section';
import Travel from './Travel';
import Experience from './Experience';
import Good from './Good';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Hero/> */}
        {/* <AboutUs/> */}
        <WobbleCardDemo />
        <Section/>
        <Travel/>
        <Experience/>
        <Good/>
        <Footer/>
    </div>
  )
}

export default Home


export function WobbleCardDemo() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-3 gap-2 mt-2 md:px-11 px-6 py-2 xl:w-full">
     <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 lg:row-span-2 h-full  min-h-[500px] lg:min-h-[300px] bg-[url('https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-no-repeat relative overflow-hidden"
        className=""
        >
        <div className="max-w-lg relative ">
            <h2 className="text-left text-balance text-3xl md:text-3xl lg:text-7xl font-semibold tracking-[-0.015em] text-white">
                Refreshing Exploration The world
            </h2>
            <p className="mt-4 text-left text-lg text-neutral-100">
            Journey beyond the ordinary advanture <span className='text-gray-800 font-medium'> trip</span>
            </p>
        </div>

  

</WobbleCard>

    <WobbleCard
        containerClassName="col-span-1 min-h-[300px] bg-[url('https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center  relative"
        >
        <h2 className="max-w-80 text-left text-balance text-2xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white relative ">
            Collect memories, not things
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 relative ">
           Where dreams meet destinations
        </p>
    </WobbleCard>
     <WobbleCard
  containerClassName="col-span-1 min-h-[300px] bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat relative"
>
  <h2 className="max-w-80 text-left text-balance text-2xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white relative z-10">
      Explore more. Worry less
  </h2>
  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200 relative z-10">
      Pack light. Travel far
  </p>
</WobbleCard>
     <WobbleCard className="md:flex hidden flex-col"
//   containerClassName="col-span-1 min-h-[300px] bg-[url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat relative"
>
  <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-black relative z-10">
    Travel is the only thing you buy that makes you richer
  </h2>
  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-black relative z-10">
      Go beyond the map
  </p>
</WobbleCard>

      <WobbleCard
        containerClassName="col-span-1 lg:col-span-1 bg-[url('https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-center bg-no-repeat relative min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-2xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Adventure is out there—go find it
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Go where you feel most alive
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
        containerClassName="col-span-1 lg:col-span-1 bg-[url('https://media.istockphoto.com/id/1196989645/photo/aerial-view-of-coastal-road-in-tuscany-italy.jpg?s=612x612&w=0&k=20&c=BESdo-1xNSbMoiWqLooT_Z2XGEdD8YByMmWjaDivNzs=')] bg-cover bg-center bg-no-repeat relative min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-2xl md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Chasing sunsets, finding peace
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              See the world. Feel the wonder
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










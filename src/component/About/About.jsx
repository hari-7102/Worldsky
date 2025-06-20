import React from "react";
import { ArrowRight } from 'lucide-react';
import { ClockPlus } from 'lucide-react';
import { CopyPlus } from 'lucide-react';
import { CalendarRange } from 'lucide-react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="md:px-16 px-6 py-11 ">
      <div className="w-full flex flex-wrap lg:flex-nowrap">
      <motion.div 
            initial={{opacity : 0 , x:-30}}
             whileInView={{opacity : 1 , x:0}}
            transition={{duration : 0.5}}
            viewport={{amount : 0.4 , once:true}}

      className="md:w-1/2  w-full ">
        <img
          className="md:h-[41rem] h-auto w-full rounded-2xl  "
          src="https://images.pexels.com/photos/28772389/pexels-photo-28772389/free-photo-of-majestic-snow-capped-mountain-in-tirol-austria.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </motion.div>
      <motion.div 
            initial={{opacity : 0 , x:30}}
             whileInView={{opacity : 1 , x:0}}
            transition={{duration : 0.5}}
            viewport={{amount : 0.4 , once:true}}
      className="md:w-1/2  w-full  py-6 md:px-7 ">
        <p className="md:text-6xl text-5xl font-medium text-black">
          A Story Of <span className="text-blue-600"> WorldSky </span>{" "}
        </p>
        <p className="max-w-2xl text-gray-600  py-8 ">
          WorldSky was born out of a simple idea: to make travel more
          accessible, meaningful, and enjoyable for everyone. In a world full of
          endless options, we wanted to create a platform that cuts through the
          noise and helps travelers make informed, exciting, and memorable
          choices.
        </p>
        <p className="text-2xl flex items-center gap-2 text-black">
          <span><ArrowRight/></span> Born from Real Travel Experiences
        </p>
        <p className="mx-8 my-3 text-gray-500">
          Our founders spent years traveling across continents, experiencing
          different cultures, and learning the gaps in travel platforms
          firsthand. That insight shaped what WorldSky would become.
        </p>
        <p className="text-2xl flex items-center gap-2 text-black">
          <span><ArrowRight/></span> Frustration Sparked Innovation
        </p>
        <p className="mx-8 my-3 text-gray-500">
            We struggled with disorganized bookings, scattered reviews,
            and a lack of reliable information. That frustration fueled 
            our mission to build a simple, unified travel platform where
            planning and discovery could happen all in one place.
        </p>
        <p className="text-2xl flex items-center gap-2 text-black">
          <span><ArrowRight/></span>  Built by Travelers, for Travelers
        </p>
        <p className="mx-8 my-3 text-gray-500">
          Our team includes solo adventurers, digital nomads, photographers, 
          foodies, and nature lovers. We bring our diverse backgrounds 
          together to create a tool that understands the real needs of 
          modern travelers.
        </p>
      </motion.div>
      </div>

      <div className="w-full md:flex  flex-wrap lg:flex-nowrap  py-10  md:py-24">
        <motion.div 
            initial={{opacity : 0 , x:-30}}
            whileInView={{opacity : 1 , x:0}}
            transition={{duration : 0.5}}
            viewport={{amount : 0.4 , once:true}}
        className="md:w-1/2 w-full ">
            <p className="text-5xl  md:text-6xl font-medium text-blue-600 ">WorldSky</p>
            <p className="text-4xl mt-2 font-medium  text-black ">What We Offer</p>

            <p className="text-base mt-6 text-gray-500">At WorldSky, we aim to be your one-stop travel solution. Our platform is designed to help you:</p>
            <div className="flex p-3 items-center gap-11 md:max-w-xl  my-4 border border-gray-600 rounded-2xl md:mx-2.5">
              <ClockPlus size={50} className="bg-gray-200  rounded-xl px-2"/>
              <div className="">
                <p className="text-xl font-semibold text-black">Explore Top Travel Destinations</p>
                <p className="text-sm mt-1.5 max-w-2xl">Discover the world’s most beautiful places — from beaches and mountains to historic cities and vibrant cultures.
</p>
              </div>
            </div>
            <div className="flex p-3 items-center gap-11 max-w-xl  my-4 border border-gray-600 rounded-2xl md:mx-2.5">
              <CopyPlus size={50} className="bg-gray-200  rounded-xl px-2"/>
              <div className="">
                <p className="text-xl font-semibold text-black">Plan Personalized Trips</p>
                <p className="text-sm mt-1.5 max-w-2xl">Discover the world’s most beautiful places — from beaches and mountains to historic cities and vibrant cultures.
</p>
              </div>
            </div>
            <div className="flex p-3 items-center gap-11 max-w-xl  my-4 border border-gray-600 rounded-2xl md:mx-2.5">
              <CalendarRange size={55} className="bg-gray-200  rounded-xl px-2"/>
              <div className="">
                <p className="text-xl font-semibold text-black"> Discover Activities and Local Experiences</p>
                <p className="text-sm mt-1.5 max-w-2xl">Discover the world’s most beautiful places — from beaches and mountains to historic cities and vibrant cultures.
</p>
              </div>
            </div>
        </motion.div>
        <motion.div 
            initial={{opacity : 0 , x:30}}
            whileInView={{opacity : 1 , x:0}}
            transition={{duration : 0.5}}
            viewport={{amount : 0.4 , once:true}}

        className="md:w-1/2  w-full py-5   " >
            <img src="https://images.pexels.com/photos/32368121/pexels-photo-32368121/free-photo-of-scenic-view-of-istanbul-with-topkapi-palace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            className="rounded-xl" alt="" />
        </motion.div>

      </div>
      
    </div>
  );
};

export default About;

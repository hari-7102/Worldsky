import React from "react";
import River from "../assets/river.jpeg";
import { motion } from "framer-motion";
const Travel = () => {
  return (
    <div className="flex flex-wrap w-full lg:flex-nowrap justify-center py-16   md:py-28">
      <motion.div 
            initial={{opacity: 0 , x:-30}}
            whileInView={{opacity : 1 , x:0}}
            transition={{duration: 0.5 }}
            viewport={{once:true , amount :0.3}}
      className="md:w-1/2 w-full  flex justify-center">
        <img
          src={River}
          alt=""
          className="md:w-96 w-full md:px-0 px-6  h-auto rounded-2xl"
        />
      </motion.div>

      <motion.div 
            initial={{opacity: 0 , x:30}}
            whileInView={{opacity : 1 , x:0}}
            transition={{duration: 0.5 }}
            viewport={{once:true , amount :0.3}}

      className="md:w-1/2 px-4  w-full py-11 md:py-1 items-center md:items-start flex-col   flex-wrap lg:flex-nowrap flex justify-start gap-1.5 px-auto">
        {/* <p className='text-5xl font-serif   '>Travelling make you Rich</p>
            <p className='text-5xl  font-serif    '>in Stories and Experiences,</p>
            <p className='text-5xl  font-serif   '>and Memories</p> */}

        <p className="md:max-w-2xl  w-full text-center  md:text-start  text-5xl font-serif">
          Travelling make you Richin Stories and Experiences,and Memories{" "}
        </p>

        <div className="text-gray-600 mt-3.5 text-sm">
          <p>Each step of the Journey brings unique stories to tell,valuable</p>
          <p>lesson form various experience</p>
        </div>
        <div className="py-7">
          <div className="flex gap-48 items-center ">
            <p className="text-4xl font-semibold">95%</p>
            <p>
              Customer <br /> Satisfcation
            </p>
          </div>
          <hr class="border-t-2 w-[20rem] my-4 border-gray-200 " />
          <div className="flex gap-48 items-center ">
            <p className="text-4xl font-semibold">80+</p>
            <p>
              Popular <br /> Destination
            </p>
          </div>
          <hr class="border-t-2 w-[20rem] my-4 border-gray-200 " />
          <div className="flex gap-44 items-center ">
            <p className="text-4xl font-semibold">250+</p>
            <p>
              Experience <br /> Guide
            </p>
          </div>
          <hr class="border-t-2 w-[20rem] my-4 border-gray-200 " />
        </div>
      </motion.div>
    </div>
  );
};

export default Travel;

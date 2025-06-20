import React from "react";
import { motion } from "framer-motion";
const Section = () => {
  return (
    <div className="md:py-52  py-24 bg-gray-100 font-sans">
      <motion.div 
            initial={{opacity: 0 , y:-30}}
            whileInView={{opacity : 1 , y:0}}
            transition={{duration: 0.5 }}
            viewport={{once:true ,   amount :0.2}}
      className="text-black text-center py-2.5 flex flex-wrap lg:flex-nowrap justify-center items-end gap-5">
        <p className="md:text-7xl   text-5xl font-serif ">
          Make Your Move and Discover <br />
        </p>
        <img
          className="w-33 h-15 bg-cover rounded-4xl"
          src="https://images.pexels.com/photos/29431460/pexels-photo-29431460/free-photo-of-fishing-vessel-in-the-atlantic-near-faroe-islands.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p className="md:text-7xl   text-5xl   font-serif   ">the</p>
      </motion.div>
      <motion.div 
                          initial={{opacity: 0 , y:30}}
            whileInView={{opacity : 1 , y:0}}
            transition={{duration: 0.5 }}
            viewport={{once:true , amount :0.2}}
      className="text-black text-center flex flex-wrap lg:flex-nowrap   justify-center items-end gap-5">
        <p className="md:text-7xl   text-5xl  font-serif   ">
          world <br />
        </p>
        <img
          className="w-33 h-15 bg-cover rounded-4xl"
          src="https://images.pexels.com/photos/29149092/pexels-photo-29149092/free-photo-of-dramatic-ocean-waves-crashing-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p className="md:text-7xl   text-5xl   font-serif    ">that's waiting for you</p>
      </motion.div>
      <p className="text-center text-gray-500  mt-8">Traveling change you.You see new places,meet new people,and become a new version of yourself</p>
    </div>
  );
};

export default Section;

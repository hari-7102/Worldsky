import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Indonesia = () => {
  const pic = [
    "https://images.pexels.com/photos/31783334/pexels-photo-31783334/free-photo-of-lotus-temple-architectural-marvel-in-new-delhi.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7850522/pexels-photo-7850522.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/9869786/pexels-photo-9869786.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/910393/pexels-photo-910393.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3038555/pexels-photo-3038555.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2958434/pexels-photo-2958434.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/17395972/pexels-photo-17395972/free-photo-of-photo-of-the-piazza-navona-square-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/29761659/pexels-photo-29761659/free-photo-of-stunning-sunset-over-vatican-city-skyline.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5074416/pexels-photo-5074416.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/19367138/pexels-photo-19367138/free-photo-of-bridge-in-florence-during-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30647406/pexels-photo-30647406/free-photo-of-scenic-italian-coastline-with-rocky-cliffs.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/23358558/pexels-photo-23358558/free-photo-of-ruins-of-colosseum-in-rome.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const css = [
    "row-span-1 md:row-span-2",
    "h-72",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-1",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-1",
    "row-span-1 md:row-span-3",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-2",
    "row-span-1 md:row-span-1",
  ];

  return (
    <div>
      <Navbar />
      <div className="px-6 py-14">
        <p className="text-6xl font-serif  ">India</p>
        <div className="grid md:grid-cols-3   px-2     grid-cols-1  grid-rows-12  md:grid-rows-7  gap-2 mt-5 ">
          {pic.map((i, index) => (
            <p
              key={index}
              className={`bg-cover  rounded-2xl  col-span-1   ${css[index]}`}
              style={{ backgroundImage: `url(${pic[index]})` }}
            ></p>
          ))}





          {/* <p className='bg-[url("https://images.pexels.com/photos/29833372/pexels-photo-29833372/free-photo-of-interior-of-istiqlal-mosque-during-prayer-time.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-bottom  rounded-2xl col-span-1  row-span-2 '></p>
          <p className="bg-[url('https://images.pexels.com/photos/2573543/pexels-photo-2573543.jpeg?auto=compress&cs=tinysrgb&w=600')]  bg-bottom    rounded-2xl col-span-1  h-72"></p>
          <p className="bg-[url('https://images.pexels.com/photos/3780665/pexels-photo-3780665.jpeg?auto=compress&cs=tinysrgb&w=600')] rounded-2xl col-span-1 row-span-2  "></p>
          <p  className="bg-[url('https://images.pexels.com/photos/10686258/pexels-photo-10686258.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/4913546/pexels-photo-4913546.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-1"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/10403974/pexels-photo-10403974.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/11977546/pexels-photo-11977546.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/12895223/pexels-photo-12895223.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-1"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/7606391/pexels-photo-7606391.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-3"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/12636165/pexels-photo-12636165.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/6226703/pexels-photo-6226703.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-2"></p>
          <p  className="bg-[url('https://images.pexels.com/photos/10207529/pexels-photo-10207529.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover rounded-2xl col-span-1 row-span-1"></p> */}


          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Indonesia;

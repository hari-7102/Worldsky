import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Indonesia = () => {
  const pic = [
    {img:"https://images.pexels.com/photos/15988879/pexels-photo-15988879/free-photo-of-cloud-over-temple-buildings.jpeg?auto=compress&cs=tinysrgb&w=600",style:'row-span-1 md:row-span-2'} ,
    {img : "https://images.pexels.com/photos/3399870/pexels-photo-3399870.jpeg?auto=compress&cs=tinysrgb&w=600", style : 'h-72' },
    {img : "https://images.pexels.com/photos/30886953/pexels-photo-30886953/free-photo-of-traditional-japanese-shrine-with-lanterns-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-2" },
    {img: "https://images.pexels.com/photos/18848906/pexels-photo-18848906/free-photo-of-low-angle-shot-of-the-osaka-castle-in-osaka-japan.jpeg?auto=compress&cs=tinysrgb&w=600" , style : "row-span-1 md:row-span-2"} , 
    {img : "https://images.pexels.com/photos/32416124/pexels-photo-32416124/free-photo-of-crowds-at-senso-ji-temple-in-tokyo-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-1" } , 
    {img : "https://images.pexels.com/photos/31268047/pexels-photo-31268047/free-photo-of-pagoda-and-mount-fuji-at-sunrise-in-japan.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-2",},
    {img : "https://images.pexels.com/photos/15924869/pexels-photo-15924869/free-photo-of-a-busy-city-street-with-the-view-of-tsutenkaku-in-osaka-japan.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-2",} , 
    {img : "https://images.pexels.com/photos/20277145/pexels-photo-20277145/free-photo-of-dotonbori-in-osaka.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-1",},
    {img : "https://images.pexels.com/photos/31464493/pexels-photo-31464493/free-photo-of-majestic-great-buddha-of-kamakura-in-serenity.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-3",} , 
    {img : "https://images.pexels.com/photos/32276426/pexels-photo-32276426/free-photo-of-nighttime-view-of-mount-fuji-with-city-lights.jpeg?auto=compress&cs=tinysrgb&w=600", style : "row-span-1 md:row-span-2",},
    {img : "https://images.pexels.com/photos/3375997/pexels-photo-3375997.jpeg?auto=compress&cs=tinysrgb&w=600", style: "row-span-1 md:row-span-2",},
    {img :  "https://images.pexels.com/photos/32497959/pexels-photo-32497959/free-photo-of-mount-fuji-with-nemophila-flowers-in-fujikawaguchiko.jpeg?auto=compress&cs=tinysrgb&w=600", style: "row-span-1 md:row-span-1",}
  ];

  const css = [
    "row-span-1 md:row-span-2 bg-bottom",
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
      <div className="px-5 py-14">
        <p className="text-6xl font-serif  ">Japan</p>
        <div className="grid md:grid-cols-3   px-2  grid-cols-1  grid-rows-12  md:grid-rows-7  gap-4 mt-5 ">
          {pic.map((i, index) => (
            <p
              key={index}
              className={`md:bg-cover  rounded-2xl  col-span-1   ${i.style}`}
              style={{ backgroundImage: `url(${i.img})` }}
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

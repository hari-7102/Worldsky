import React from "react";

const About = () => {
  return (
    <div className="px-16 py-11 flex">

    <div className="w-1/2 ">
        <img  className="h-[41rem] w-full rounded-2xl  "
        
        src="https://images.pexels.com/photos/28772389/pexels-photo-28772389/free-photo-of-majestic-snow-capped-mountain-in-tirol-austria.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    </div>
      <div className="w-1/2 px-7 ">
        <p className="text-6xl font-medium text-black">A Story Of <span className="text-blue-600"> WorldSky  </span>  </p>
        <p  className="max-w-2xl text-gray-600  py-8 " >
          WorldSky was born out of a simple idea: to make travel more
          accessible, meaningful, and enjoyable for everyone. In a world full of
          endless options, we wanted to create a platform that cuts through the
          noise and helps travelers make informed, exciting, and memorable
          choices.
        </p>
        <p className="text-2xl text-black"> Where should I go next?</p>
      </div>
    </div>
  );
};

export default About;

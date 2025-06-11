import React from "react";

const Hero = () => {
  return (
    <div className="px-16 py-7 md:py-20 flex flex-wrap lg:flex-nowrap">
      <div className="md:w-1/2 w-full">
        <p className=" text-4xl  md:text-6xl font-medium text-black">
          Welcome to <span className="text-blue-500">WorldSky</span> Your
          Gateway to Adventure!
        </p>
        <p className="max-w-2xl text-gray-600  py-8 ">
          At WorldSky, we believe that travel is more than just visiting new
          places — it's about experiencing different cultures, meeting people,
          and creating stories that last a lifetime
        </p>
        {/* <p className="max-w-2xl text-gray-600  ">
          Founded with a passion for exploration and a love for the planet, our
          mission is to make travel planning simple, smart, and inspiring.
          Whether you're a solo traveler seeking hidden gems or a family
          planning your next vacation, we bring the world to your fingertips.
        </p> */}
        {/* <div className="flex gap-6">
          <img
            className="w-72 h-auto rounded-xl"
            src="https://images.pexels.com/photos/19758089/pexels-photo-19758089/free-photo-of-a-church-on-top-of-a-mountain-surrounded-by-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <img
            className="w-72 h-auto rounded-xl"
            src="https://images.pexels.com/photos/19758091/pexels-photo-19758091/free-photo-of-a-bridge-over-a-stream.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div> */}
        <button className="   px-5 py-2 rounded-3xl bg-black text-white">
          Explore More →{" "}
        </button>
      </div>

      <div className="md:w-1/2 w-full py-4">
        <img
          src="https://images.pexels.com/photos/12887393/pexels-photo-12887393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-2xl"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;

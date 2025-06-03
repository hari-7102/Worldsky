import React from "react";

const Section = () => {
  return (
    <div className="py-52 bg-gray-100 font-sans">
      <div className="text-black text-center py-2.5 flex flex-wrap lg:flex-nowrap justify-center items-end gap-5">
        <p className="text-7xl font-serif ">
          Make Your Move and Discover <br />
        </p>
        <img
          className="w-33 h-15 bg-cover rounded-4xl"
          src="https://images.pexels.com/photos/29431460/pexels-photo-29431460/free-photo-of-fishing-vessel-in-the-atlantic-near-faroe-islands.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p className="text-7xl  font-serif   ">the</p>
      </div>
      <div className="text-black text-center flex flex-wrap lg:flex-nowrap   justify-center items-end gap-5">
        <p className="text-7xl  font-serif   ">
          world <br />
        </p>
        <img
          className="w-33 h-15 bg-cover rounded-4xl"
          src="https://images.pexels.com/photos/29149092/pexels-photo-29149092/free-photo-of-dramatic-ocean-waves-crashing-on-rocks.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <p className="text-7xl   font-serif    ">that's waiting for you</p>
      </div>
      <p className="text-center text-gray-500  mt-8">Traveling change you.You see new places,meet new people,and become a new version of yourself</p>
    </div>
  );
};

export default Section;

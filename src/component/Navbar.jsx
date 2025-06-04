import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChartColumnDecreasing } from "lucide-react";
import Image3 from "../assets/img3.jpeg";
import { AlignJustify } from 'lucide-react';
import { X } from 'lucide-react';
import { Globe } from 'lucide-react';
const Navbar = () => {
    const [Isopen , Setiopen] = useState(false)

    const NavbarItems = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "DESTINATION", link: "/project" },
        { name: "REVIEWS", link: "/service" },
        { name: "F&Q", link: "/question" },
    ];

    const location = useLocation();

  return (
    <div
      className="w-full mb-2 bg-cover bg-center"
    //   style={{ backgroundImage: `url(${Image3})` }}
    >
      <div className="hidden md:flex w-full justify-between  items-end   md:items-center gap-4 py-3 p-6 px-10 text-black shadow-2xs">
        {/* Logo Section */}
        <div className="flex items-center text-black   gap-0.5">
          <Globe size={24} className="text-gray-950" />
          <p className="font-semibold text-xl text-black">WORLDSKY</p>
        </div>

        {/* Navbar Links */}
        <div className=" hidden  text-black  md:flex gap-7 text-sm font-medium">
          {NavbarItems.map((item, index) => (
            <p key={index}>
              <Link
                to={item.link}
                className={`${
                  location.pathname === item.link
                    ? "text-black"
                    : "text-gray-400 hover:text-violet-300"
                }`}
              >
                {item.name}
              </Link>
            </p>
          ))}
        </div>

        {/* Contact Button */}
        <div className="md:flex  text-black  hidden">
          <Link
            to="/contact"
            className=" font-medium bg-black text-white rounded-lg px-5 py-2"
          >
            Register
          </Link>
        </div>
          </div>
        <div className="md:hidden justify-between  text-white flex  p-6 px-7">

            <div className="flex items-center gap-0.5">
            <Globe size={24} className="text-black" />
            <p className="font-medium text-2xl text-black">WORLDSKY</p>
            </div>
                
            <button  onClick={() => Setiopen(!Isopen)}>
            {Isopen ? 
             <X size={23} className="text-black  cursor-pointer" />  :
             <AlignJustify size={23} className="text-black    cursor-pointer"/>} 
            
            </button>

        </div>

        {Isopen &&
            

            <div className="flex md:hidden  flex-col justify-center items-center h-auto text-black font-medium gap-4">
                {/* <div className="flex items-center gap-0.5">
                    <ChartColumnDecreasing size={28} className="text-violet-300" />
                    <p className="font-medium text-3xl text-white">Nexus</p>
                </div> */}

                {NavbarItems.map((item , index ) => (
                    <p className="hover:scale-105  duration-75"   ><Link to={item.link} >{item.name}</Link></p>
                ))

                }

            </div>
            

        }
      
    </div>
  );
};

export default Navbar;
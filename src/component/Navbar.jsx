import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChartColumnDecreasing } from "lucide-react";
import Image3 from "../assets/img3.jpeg";
import { AlignJustify } from "lucide-react";
import { X } from "lucide-react";
import { Globe } from "lucide-react";
import { motion } from 'framer-motion';


const Navbar = () => {
  const [Isopen, Setiopen] = useState(false);

  const NavbarItems = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/about" },
    { name: "DESTINATION", link: "/destination" },
    { name: "REVIEWS", link: "/reviews" },
    { name: "CONTACT", link: "/contact" },
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
            className="font-medium bg-black text-white rounded-lg px-5 py-2"
          >
            Register
          </Link>
        </div>
      </div>
      <div className="md:hidden  justify-between  text-white flex  p-6 px-5">
        <div className="flex items-center gap-0.5">
          <Globe size={24} className="text-black" />
          <p className="font-medium text-2xl text-black">WORLDSKY</p>
        </div>

        <button onClick={() => Setiopen(!Isopen)}>
          {Isopen ? (
            <X size={23} className="text-black  cursor-pointer" />
          ) : (
            <AlignJustify size={23} className="text-black    cursor-pointer" />
          )}
        </button>
      </div>

      {Isopen && (
        <div
          // initial={{opacity:0 , y:30}}
          // whileInView={{opacity:1 , y:0}}
          // transition={{duration:300 , delay:index*0.3}}
          // viewport={{amount:50 , once:true}}
          className="flex md:hidden h-screen flex-col justify-start mt-28 gap items-center text-black font-medium gap-8"
        >
          {/* <div className="flex items-center gap-0.5">
                    <ChartColumnDecreasing size={28} className="text-violet-300" />
                    <p className="font-medium text-3xl text-white">Nexus</p>
                </div> */}

          {NavbarItems.map((item, index) => (

            <motion.p
              key={index}

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.3 }}
              viewport={{ amount: 0.5, once: true }}

              className="hover:scale-105  duration-75"
            >
              <Link to={item.link}>{item.name}</Link>
            </motion.p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black py-3.5">
      <div className="px-4  md:px-14 py-11   flex-wrap lg:flex-nowrap    flex justify-between">
        <div className="md:w-1/3 w-full flex justify-center items-center md:justify-start md:items-start flex-col gap-7 flex-wrap lg:flex-nowrap text-white">
          <div className="flex items-center gap-0.5">
            <Globe size={24} className="text-white" />
            <p className="font-semibold text-xl text-white">WORLDSKY</p>
          </div>

          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            voluptatem tempore consequuntur ex incidunt nostrum, molestias amet
            ipsa reprehenderit id quidem, dolorem omnis, aperiam quas ducimus
            nam culpa voluptas quod nemo. Magni, totam quas!
          </p>
        </div>

        <div className="md:w-2/3 py-4  w-full md:items-end md:justify-end  justify-center items-center flex flex-wrap lg:flex-nowrap  gap-6 md:gap-20">
            <div className="flex flex-wrap lg:flex-nowrap w-full  justify-center items-center  flex-col text-white gap-2.5">
                <p className="text-2xl mb-1.5">TOUR</p>
                <p className="text-gray-400 text-base">Austrailla Special</p>
                <p  className="text-gray-400 text-base" >Africa</p>
                <p  className="text-gray-400 text-base" >America</p>
                <p className="text-gray-400 text-base"   >Asia</p>
            </div>
            <div className="flex  flex-wrap lg:flex-nowrap  justify-center items-center  w-full flex-col text-white gap-2.5">
                <p className="text-2xl mb-1.5">Company</p>
                <p className="text-gray-400 text-base"  >About</p>
                <p className="text-gray-400 text-base"  >Press</p>
                <p className="text-gray-400 text-base"  >Carrers</p>
                <p  className="text-gray-400 text-base">Contact</p>
            </div>
            <div className="flex flex-wrap justify-center items-center   lg:flex-nowrap w-full flex-col text-white gap-2.5">
                <p className="text-2xl   mb-1.5">Products</p>
                <p  className="text-gray-400 text-base">Package</p>
                <p className="text-gray-400 text-base"   >Austrailla Special</p>
                <p className="text-gray-400 text-base" >Austrailla Special</p>
                <p  className="text-gray-400 text-base" >Austrailla Special</p>
            </div>
            <div className="flex   flex-wrap lg:flex-nowrap   justify-center items-center  w-full  flex-col text-white gap-2.5">
                <p className="text-2xl  mb-1.5  ">Connect</p>
                <p className="text-gray-400 text-base"  >Instagram</p>
                <p className="text-gray-400 text-base"  >LinkedIn</p>
                <p className="text-gray-400 text-base"  >Twitter</p>
                <p className="text-gray-400 text-base"  >Whatsapp</p>
            </div>
        </div>

      </div>

        <hr  className="border-t-2 mx-16  border-white py-4"/>

        <div className="flex flex-wrap  w-full lg:flex-nowrap justify-between px-14">
            <p  className="text-white">© 2025 Hariharan S.All rights Reserved.</p>
            <p  className="text-white" >Terms & Conditions | Privacy</p>
        </div>
    </div>
  );
};

export default Footer;

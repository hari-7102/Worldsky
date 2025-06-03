import React from "react";
import { Globe } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black py-3.5">
      <div className=" px-14 py-11 flex justify-between">
        <div className="w-1/3 flex flex-col gap-7 text-white">
          <div className="flex items-center    gap-0.5">
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

        <div className="w-2/3 items-end justify-end flex gap-20">
            <div className="flex flex-col text-white gap-2.5">
                <p className="text-2xl mb-1.5">TOUR</p>
                <p className="text-gray-400 text-base">Austrailla Special</p>
                <p  className="text-gray-400 text-base" >Africa</p>
                <p  className="text-gray-400 text-base" >America</p>
                <p className="text-gray-400 text-base"   >Asia</p>
            </div>
            <div className="flex flex-col text-white gap-2.5">
                <p className="text-2xl mb-1.5">Company</p>
                <p className="text-gray-400 text-base"  >About</p>
                <p className="text-gray-400 text-base"  >Press</p>
                <p className="text-gray-400 text-base"  >Carrers</p>
                <p  className="text-gray-400 text-base">Contact</p>
            </div>
            <div className="flex flex-col text-white gap-2.5">
                <p className="text-2xl    mb-1.5">Products</p>
                <p  className="text-gray-400 text-base">Package</p>
                <p className="text-gray-400 text-base"   >Austrailla Special</p>
                <p className="text-gray-400 text-base" >Austrailla Special</p>
                <p  className="text-gray-400 text-base" >Austrailla Special</p>
            </div>
            <div className="flex flex-col text-white gap-2.5">
                <p className="text-2xl  mb-1.5  ">Connect</p>
                <p className="text-gray-400 text-base"  >Instagram</p>
                <p className="text-gray-400 text-base"  >LinkedIn</p>
                <p className="text-gray-400 text-base"  >Twitter</p>
                <p className="text-gray-400 text-base"  >Whatsapp</p>
            </div>
        </div>

      </div>

        <hr  className="border-t-2 mx-16  border-white py-4"/>

        <div className="flex justify-between px-14">
            <p  className="text-white">© 2025 Hariharan S.All rights Reserved.</p>
            <p  className="text-white" >Terms | Privacy</p>
        </div>
    </div>
  );
};

export default Footer;

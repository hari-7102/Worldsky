import React from "react";
import FirstCardImage from "../assets/img3.jpeg"; // ✅ Your image path
import { WobbleCard } from "../components/ui/wobble-card";

const HeroCard = () => {
  return (
    <div
      className="col-span-1 lg:col-span-2 h-full bg-cover bg-center min-h-[500px] lg:min-h-[300px] relative"
      
    >

      <WobbleCard 
            className="col-span-1 lg:col-span-2 h-full bg-cover bg-center min-h-[500px] lg:min-h-[300px] relative"
      style={{ backgroundImage: `url(${FirstCardImage})` }}>
        <div className="max-w-xs text-white">
          <h2 className="text-left text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-base text-neutral-200">
            With over 100,000 monthly active bot users, Gippity AI is the most
            popular AI platform for developers.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
};

export default HeroCard;

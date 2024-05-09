import React from "react";
import { homeImg, video } from "../../assets";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-7xl font-bold mr-8">
            Build your audience and grow your brand
          </h1>
          <p className="text-[#797979] mr-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
          <div className="flex gap-8">
            <button className="px-12 py-2 bg-[#00ACFF] text-white rounded-full">
              Get Started
            </button>
            <button className="px-6 py-2 bg-[#F4F4F4] rounded-full flex gap-2 items-center">
              Watch Video <img className="w-12" src={video} alt="" />
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img src={homeImg} alt="home" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

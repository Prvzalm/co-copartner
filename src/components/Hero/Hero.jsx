import React from "react";
import { homeImg, video } from "../../assets";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-1 flex flex-col gap-4 p-4 md:p-0">
          <h1 className="text-4xl md:text-7xl md:text-black text-white font-bold mr-8">
            Build your audience and grow your brand
          </h1>
          <p className="md:text-[#797979] text-[#ffffffac] text-sm md:text-base mr-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum
            ullamcorper sed pharetra sene.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="px-12 py-2 bg-[#00ACFF] text-white rounded-full w-full md:w-auto">
              Get Started
            </button>
            <button className="px-6 py-2 bg-[#F4F4F4] rounded-full flex gap-2 items-center justify-center w-full md:w-auto">
              Watch Video <img className="w-6 md:w-12" src={video} alt="" />
            </button>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-0">
          <img src={homeImg} alt="home" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

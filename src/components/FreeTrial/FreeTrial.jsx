import React from "react";
import { homeImg } from "../../assets";

const FreeTrial = () => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-3xl freeTrial-bg">
      <div className="flex-1 flex flex-col items-center px-6 md:px-12 py-12 md:py-36">
        <div className="flex flex-col gap-4 my-auto text-white">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Start your free trial today
          </h1>
          <p className="text-base md:text-xl text-center">
            It is a long established fact that a reader will be by the readable
            when looking at it layout.
          </p>
          <div className="flex flex-col items-center">
            <input
              className="rounded-full px-6 py-3 bg-[#ffffff47] text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white focus:border-transparent mb-4 w-full md:w-1/2"
              type="text"
              placeholder="Your email here..."
            />
            <button className="px-8 py-4 bg-[#fff] text-[#00ACFF] rounded-full mx-auto font-bold">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 md:flex hidden justify-center items-center mb-8 md:mb-0">
        <img className="w-full max-w-[530px]" src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default FreeTrial;

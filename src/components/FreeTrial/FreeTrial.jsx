import React from "react";
import { homeImg } from "../../assets";

const FreeTrial = () => {
  return (
    <div className="w-full flex rounded-3xl freeTrial-bg">
      <div className="flex-1 flex flex-col items-center mx-12 py-36">
        <div className="flex flex-col gap-4 my-auto text-white">
          <h1 className="text-5xl font-bold">Start your free trial today</h1>
          <p className="text-xl">
            It is a long established fact that a reader will be by the readable
            when looking at it layout.{" "}
          </p>
          <div>
            <input
              className="rounded-full px-6 py-3 bg-[#ffffff47] text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-white focus:border-transparent mr-6 w-1/2"
              type="text"
              placeholder="Your email here..."
            />
            <button className="px-8 py-4 bg-[#fff] text-[#00ACFF] rounded-full mx-auto font-bold my-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-end">
        <img className="w-[530px] mb-8" src={homeImg} alt="" />
      </div>
    </div>
  );
};

export default FreeTrial;

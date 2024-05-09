import React from "react";
import { icon1, icon2, icon3 } from "../../assets";

const Feature = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="text-center">
        <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold">
          Features
        </button>
        <h1 className="text-4xl text-center font-bold md:mx-96 md:my-8">
          Powerful features to boost your productivity
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="group flex flex-col hover:bg-[#F9F9F9] p-8 rounded-3xl hover:scale-105 duration-300 items-center">
          <img className="w-[22rem]" src={icon1} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-3xl">Secured Platform</h1>
            <p className="text-[#797979] text-xl my-5">Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
          </div>
          <button className="font-bold group-hover:text-[#00ACFF] group-hover:underline">Learn More</button>
        </div>
        <div className="group flex flex-col hover:bg-[#F9F9F9] p-8 rounded-3xl hover:scale-105 duration-300 items-center">
          <img className="w-80" src={icon2} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-3xl">Advanced Analytics</h1>
            <p className="text-[#797979] text-xl my-5">Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
          </div>
          <button className="font-bold group-hover:text-[#00ACFF] group-hover:underline">Learn More</button>
        </div>
        <div className="group flex flex-col hover:bg-[#F9F9F9] p-8 rounded-3xl hover:scale-105 duration-300 items-center">
          <img className="w-96" src={icon3} alt="" />
          <div className="flex flex-col text-center">
            <h1 className="font-bold text-3xl">Powerful Automation</h1>
            <p className="text-[#797979] text-xl my-5">Contrary to popular belief, Lore Ipsum is not simply random text. It has roots in a piece.</p>
          </div>
          <button className="font-bold group-hover:text-[#00ACFF] group-hover:underline">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;

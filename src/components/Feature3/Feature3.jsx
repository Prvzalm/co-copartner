import React from "react";
import { check, feature3img } from "../../assets";

const Feature3 = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold my-8">
        How it Works
      </button>
      <h1 className="text-4xl text-center font-bold md:my-8">
        Powerful features to boost <br /> your productivity
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-16 gap-4">
        <div className="flex-1 md:p-0 p-8 text-center">
          <h1 className="md:text-4xl text-3xl font-semibold mb-8">
            Get your own society application!
          </h1>
          <p className="text-[#5F6D7E] mb-8">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
            tellus faucibus mauris quisque mauris in.
          </p>
          <ul>
            <li className="flex items-center text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2" />
              Enterprise-grade security
            </li>
            <li className="flex items-center text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2" />
              99.9% guaranteed uptime SLA
            </li>
            <li className="flex items-center text-[#5F6D7E]">
              <img src={check} alt="Check" className="w-5 h-5 mr-2" />
              Designated customer success team
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <img src={feature3img} alt="Feature" />
        </div>
      </div>
    </div>
  );
};

export default Feature3;

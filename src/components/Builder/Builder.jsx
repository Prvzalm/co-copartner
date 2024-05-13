import React from "react";
import { boxImg, builderBg, homeImg, midSectionImg } from "../../assets";

const Builder = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen">
      <div className="flex flex-col bg-[#F1F1F1] rounded-3xl p-12 z-10 w-full md:w-1/2">
        <div className="mb-0 mt-auto">
          <h1 className="font-bold text-2xl md:text-4xl mb-4">
            Powerful and easy to use Zestify.ai builder platform
          </h1>
          <p className="text-[#797979] mb-8 md:text-base text-sm">
            It is a long established fact that a reader will be by the from
            readable content of a page when looking at its layout. The point of
            using lorem Ipsum.
          </p>

          <div className="flex flex-col gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4">
                <img className="md:w-20 w-12" src={boxImg} alt="" />
                <div className="flex flex-col justify-evenly">
                  <h1 className="text-base md:text-lg">Lorem Ipsum</h1>
                  <p className="text-[#797979] text-xs md:text-base">
                    Contrary to popular belief, Lore Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:hidden mt-4 flex flex-col relative w-[96vw] ml-[-3rem]">
          <img className="z-20 w-[95%] mx-auto" src={homeImg} alt="" />
          <img className="absolute top-[30%] z-10 mx-auto" src={builderBg} alt="" />
        </div>
      </div>

      <div className="w-full hidden md:block md:w-2/3 z-20">
        <img
          className="w-full max-w-[870px] ml-auto md:mt-0 mt-8 md:mb-0 mb-8"
          src={midSectionImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default Builder;

import React from "react";
import { boxImg, midSectionImg } from "../../assets";

const Builder = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen">
      <div className="flex flex-col bg-[#F1F1F1] rounded-3xl p-12 z-10 w-full md:w-1/2">
        <div className="mb-0 mt-auto">
          <h1 className="font-bold text-4xl mb-4">
            Powerful and easy to use Zestify.ai builder platform
          </h1>
          <p className="text-[#797979] mb-8">
            It is a long established fact that a reader will be by the from
            readable content of a page when looking at its layout. The point of
            using lorem Ipsum.
          </p>

          <div className="flex flex-col gap-4">
            {[1, 2].map((item) => (
              <div key={item} className="flex gap-4">
                <img className="w-20" src={boxImg} alt="" />
                <div className="flex flex-col justify-evenly">
                  <h1 className="text-lg">Lorem Ipsum</h1>
                  <p className="text-[#797979]">
                    Contrary to popular belief, Lore Ipsum is not simply random
                    text.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-2/3 z-20">
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

import React from "react";
import { article1, article2, article3, user1, user2, user3 } from "../../assets";

const Suggestion = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold mt-4">
        Blog
      </button>
      <h1 className="text-3xl md:text-4xl text-center font-bold md:mx-96 md:my-8 my-4">
        Most popular articles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
        <div className="bg-white rounded-3xl p-6">
          <img className="mb-4 md:h-60 h-40 w-full" src={article1} alt="" />
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="font-bold text-base md:text-xl">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="text-[#5F6D7E] font-semibold text-xs md:text-xl">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
          </div>
          <div className="flex justify-between md:mt-8 mt-4 items-center">
            <div className="flex items-center">
            <img className="md:w-10 w-8 md:h-10 h-8 mr-2" src={user1} alt="" />
            <div className="flex flex-col md:text-base text-xs">
                <p>Andrew Miller</p>
                <p className="text-[#5F6D7E]">CEO</p>
            </div>
            </div>
            <p className="text-[#5F6D7E] md:text-base text-xs">25 Apr</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <img className="mb-4 md:h-60 h-40 w-full" src={article2} alt="" />
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="font-bold text-base md:text-xl">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="text-[#5F6D7E] font-semibold text-xs md:text-xl">
              Keeping your eye while performing a deep dive on the start-up
              mentality to derive convergence collaboratively onvergence.
            </p>
          </div>
          <div className="flex justify-between md:mt-8 mt-4 items-center">
            <div className="flex items-center">
            <img className="md:w-10 w-8 md:h-10 h-8 mr-2" src={user2} alt="" />
            <div className="flex flex-col md:text-base text-xs">
                <p>David Munsan</p>
                <p className="text-[#5F6D7E]">UX</p>
            </div>
            </div>
            <p className="text-[#5F6D7E] md:text-base text-xs">25 Apr</p>
          </div>
        </div>
        <div className="bg-white rounded-3xl p-6">
          <img className="mb-4 md:h-60 h-40 w-full" src={article3} alt="" />
          <div className="flex flex-col md:gap-4 gap-2">
            <h1 className="font-bold text-base md:text-xl">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="text-[#5F6D7E] font-semibold text-xs md:text-xl">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C.
            </p>
          </div>
          <div className="flex justify-between md:mt-8 mt-4 items-center">
            <div className="flex items-center">
            <img className="md:w-10 w-8 md:h-10 h-8 mr-2" src={user3} alt="" />
            <div className="flex flex-col md:text-base text-xs">
                <p>Andrew Meller</p>
                <p className="text-[#5F6D7E]">UI</p>
            </div>
            </div>
            <p className="text-[#5F6D7E] md:text-base text-xs">25 Apr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

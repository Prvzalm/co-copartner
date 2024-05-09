import React from "react";
import { article1, article2, article3, user1, user2, user3 } from "../../assets";

const Suggestion = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <button className="px-12 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold mt-4">
        Blog
      </button>
      <h1 className="text-4xl text-center font-bold md:mx-96 md:my-8">
        Most popular articles
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div>
          <img className="mb-4" src={article1} alt="" />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="text-[#5F6D7E] font-semibold text-xl">
              Podcasting operational management inside of workflows to establish
              a framework seamless. Convergence collaboratively.
            </p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex items-center">
            <img className="w-10 h-10 mr-2" src={user1} alt="" />
            <div className="flex flex-col">
                <p>Andrew Miller</p>
                <p className="text-[#5F6D7E]">CEO</p>
            </div>
            </div>
            <p className="text-[#5F6D7E]">25 Apr</p>
          </div>
        </div>
        <div>
          <img className="mb-4" src={article2} alt="" />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="text-[#5F6D7E] font-semibold text-xl">
              Keeping your eye while performing a deep dive on the start-up
              mentality to derive convergence collaboratively onvergence.
            </p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex items-center">
            <img className="w-10 h-10 mr-2" src={user2} alt="" />
            <div className="flex flex-col">
                <p>David Munsan</p>
                <p className="text-[#5F6D7E]">UX</p>
            </div>
            </div>
            <p className="text-[#5F6D7E]">25 Apr</p>
          </div>
        </div>
        <div>
          <img className="mb-4" src={article3} alt="" />
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-xl">
              Organize your digital assets with a new methodology here.
            </h1>
            <p className="text-[#5F6D7E] font-semibold text-xl">
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C.
            </p>
          </div>
          <div className="flex justify-between mt-8 items-center">
            <div className="flex items-center">
            <img className="w-10 h-10 mr-2" src={user3} alt="" />
            <div className="flex flex-col">
                <p>Andrew Meller</p>
                <p className="text-[#5F6D7E]">UI</p>
            </div>
            </div>
            <p className="text-[#5F6D7E]">25 Apr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;

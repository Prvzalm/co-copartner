import React from "react";
import { james, semiColon, stars } from "../../assets";

const Review = () => {
  return (
    <div className="flex flex-col items-center w-screen ml-[-7rem] bg-[#F8F9FB] testimonial-bg py-28">
      <div className="flex flex-col justify-center">
        <button className="px-8 py-4 bg-[#00ACFF1A] text-[#00ACFF] rounded-full mx-auto font-bold my-6">
          Testimonial
        </button>
        <h1 className="text-4xl font-bold">Trusted by millions of creators.</h1>
      </div>
      <div className="flex flex-col justify-center my-8 gap-4 mx-60">
        <img className="w-8 mx-auto" src={semiColon} alt="" />
        <p className="italic text-xl text-center">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage .</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-1">
        <img className="rounded-full w-20" src={james} alt="" />
        <p className="text-2xl font-bold">James Toriff</p>
        <p className="font-semibold">Developer</p>
        <div className="flex gap-2">
            {[1,2,3,4,5].map((star) => {
                return <img className="w-5" key={star} src={stars} alt="" />
            })}
        </div>
      </div>
    </div>
  );
};

export default Review;

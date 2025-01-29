import React from "react";
import trainvideo from "../assets/trainvideo.png";
export const Landing = () => (
  <div className="">
    <img className="w-full relative " src={trainvideo}></img>
    <div className=" absolute top-80 left-120">
      <h1 className="text-white text-5xl font-bold font-serif text-center">
        Welcome to{" "}
      </h1>
      <h1 className="text-[#CFB165] text-5xl font-bold p-4">
        Van Lang Tour
      </h1>

      <button className="bg-[#CFB165] rounded-md font-bold text-black p-2 text-2xl text-center ml-30 opacity-75">
        View Page
      </button>
    </div>
  </div>
);

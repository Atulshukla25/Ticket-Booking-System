import React from "react";
import { FaTrainSubway } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-[150vh] h-[30vh] rounded-2xl items-center bg-white opacity-85 m-auto flex justify-between overflow-hidden">
      <div className="flex w-full justify-around">
        <div className="flex gap-5 ">
          <div className="flex flex-col text-4xl font-bold items-center">
            <div>12:00</div>
            <div>Sai Gon</div>
          </div>
          <FaTrainSubway className="text-5xl mt-5" />
          <div className="flex flex-col text-4xl font-bold items-center">
            <div>12:00</div>
            <div>Ha Noi</div>
          </div>
        </div>
        <div className="flex flex-col relative">
          <div className="text-2xl ">first class - 24hrs00min travel</div>
          <div className=" absolute top-9 ml-6 font-bold text-3xl">
            {" "}
            price <span className="text-[#CFB165]">1,000,000 VND</span>
          </div>
        </div>
      </div>
      <div className="h-full bg-[#CFB165] px-5 flex items-center">
        <MdNavigateNext className="text-3xl font-bold h-10 w-10" />
      </div>
    </div>
  );
};

export default Card;

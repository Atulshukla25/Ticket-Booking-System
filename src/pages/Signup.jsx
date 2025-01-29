import React from "react";
import home from "../assets/home.png";

export const Signup = () => (
  <div className="relative">
    <div className="h-[150vh]">
      <img className="w-full h-full" src={home}></img>
      <form className="absolute pb-30 w-235 h-170 bg-white opacity-90 top-40 ml-50 rounded-4xl">
        <h1 className="font-bold text-4xl ml-10 mt-8">
          Ready to join Van Lang Tour? Let's get started{" "}
        </h1>
        <h3 className="text-xl ml-10 mt-2">
          We need a few details about you to create your account profile
        </h3>

        <h3 className="text-2xl mt-6 ml-10 font-bold">Preferred Language *</h3>
        <select className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white text-xl w-90 h-10 rounded-xl">
          <option>Punjabi</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Gujarati</option>
        </select>
        <h3 className="text-2xl mt-6 ml-10 font-bold">Name *</h3>
        <h3 className="text-xl ml-10 mt-2 mb-3">
          In order to earn and redeem points, your name must match the name on
          your government issued ID photo used when travelling.
        </h3>
        <div>
          <div className="">
            <input
              className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white font-bold text-xl w-90 h-10 rounded-xl"
              type="text"
              placeholder="Last name"
            />
            <input
              className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0 text-white font-bold text-xl w-90 h-10 rounded-xl"
              type="text"
              placeholder="Middle name"
            />
          </div>
          <div>
            <input
              className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white font-bold text-xl w-90 h-10 rounded-xl"
              type="text"
              placeholder="First name"
            />
            <select className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white text-xl w-90 h-10 rounded-xl">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <h3 className="text-2xl mt-6 ml-10 font-bold mb-2 ">
              Date of birth *
            </h3>
            <input
              className="bg-[#CFB165] ml-10 mt-3 px-4  text-white text-xl outline-0  w-191 h-10 rounded-xl"
              type="date"
              placeholder="Middle name"
            />
          </div>
          <button className="font-bold bg-[#CFB165] rounded-2xl ml-200 mt-10 p-3 w-20 text-2xl h-auto">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
);

import React from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";

export const Login = () => (
  <div className="relative">
    <div>
      <img className="w-full" src={home} />
    </div>
    <div className="bg-white opacity-80 p-8 rounded-4xl absolute top-45 left-130 items-center justify-center w-90 h-100 ">
      <div className="flex gap-3 ">
        <img src={logo}></img>
        <h3 className="font-bold text-[#CFB165] text-md">
          Van Lang
          <span className="text-black">
            {" "}
            Tour <br /> Welcome to Van Lang Tour !
          </span>
        </h3>
      </div>
      <form className="">
        <input
          type="email"
          placeholder="Phone Number/Email"
          className="mb-4 w-full p-2 border-b outline-none mt-20"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border-b outline-none "
        />

        <div className="flex mt-2 gap-2 justify-between">
          <div className="flex">
            <input type="checkbox"></input>
            <p className="ml-2">Remember me</p>
          </div>
          <a href="">Forgot Password?</a>
        </div>
        <button className="bg-[#CFB165] p-2 w-18 rounded-2xl ml-27 mt-5 text-black font-bold">
          Login
        </button>
      </form>
    </div>
  </div>
);

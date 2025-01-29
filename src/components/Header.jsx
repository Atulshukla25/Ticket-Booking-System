import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export const Header = () => (
  <div className="fixed z-10">
    <header className="p-8 bg-black opacity-75 text-white flex justify-between top-0 left-0 right-0 fixed">
      <div className="flex items-center justify-around w-full gap-70">
        <div className="flex items-center justify-around w-70">
          <img src={logo} />
          <h1 className="font-bold text-2xl">
            <span className="text-[#CFB165] text-2xl ">Van Lang</span> Tour
          </h1>
        </div>
        <nav className="m-5">
          <Link to="/home" className="mx-2 text-2xl font-bold">
            Home
          </Link>
          <Link to="/about" className="mx-2 text-2xl font-bold">
            About
          </Link>
          <Link to="/booking" className="mx-2 text-2xl font-bold">
            Booking
          </Link>
          <Link to="/login" className="mx-2 text-2xl font-bold">
            Login
          </Link>
          <Link
            to="/signup"
            className="mx-2 bg-[#CFB165] p-1 rounded-md text-black text-2xl font-bold"
          >
            Signup
          </Link>
        </nav>
      </div>
    </header>
  </div>
);

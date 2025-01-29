import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";

export const Footer = () => (
  <>
    <footer className=" p-20 bg-black text-white">
      <div>
        <h1 className="ml-8 text-5xl font-bold ">
          WE ARE VERY HAPPY
          <br /> THAT TOU CHOOSE US
        </h1>
        <p className="text-m ml-8 mt-5">
          Thank you for trusting us for choosing trips, exploring, traveling
          with
          <br />
          relatives and friends or for your own experiences.
        </p>
        <br />
        <br />
      </div>
      <div className="flex justify-around w-220 ml-100 ">
        <div>
          <h2 className="text-[#CFB165] text-4xl font-bold">home</h2>
          <br />
          <Link to="/about" className="">
            About us
          </Link>
          <br />
          <Link to="/booking" className="">
            Booking
          </Link>
        </div>
        <div>
          <h2 className="text-[#CFB165] text-4xl font-bold ">contact us</h2>
          <br />
          <p>08344239885</p>
          <p>VanLangTour@gmail.com</p>
        </div>
        <div>
          <h2 className="text-[#CFB165] text-4xl font-bold mr-20">follow us</h2>
          <br />
          <div className="flex gap-2 h-1">
            <img src={insta} className="h-6 w-6"></img>
            <a href="https://www.instagram.com/chplgroup">Instagram</a>
          </div>
          <br />
          <div className="flex gap-2 h-1">
            <img src={facebook} className="h-6 w-6"></img>
            <a href="https://www.instagram.com/chplgroup">Facebook</a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="h-5">
        {/* <hr className="m-20" /> */}
        <div className=" border-b-2  w-6xl m-auto"></div>
        <p className="text-xs ml-5 mt-5  bg-black">&copy; VanLangTour 2025 </p>
      </div>
    </footer>
  </>
);

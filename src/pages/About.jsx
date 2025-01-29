import React from "react";
import trainvideo from "../assets/trainvideo.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

export const About = () => (
  <div className="">
    <img className="w-full relative " src={trainvideo}></img>
    <div className=" absolute top-80 ">
      <h1 className="text-[#CFB165] text-5xl font-bold p-4 ml-130">
        Van Lang <span className="text-white">Tour</span>
      </h1>
      <h1 className="text-white text-5xl font-bold items-center ml-50">
        Your Gateway to Memorable Train Journeys
      </h1>
      <button className="bg-[#CFB165] rounded-md font-bold text-black p-2 text-2xl text-center ml-155 mt-5 opacity-75">
        Click Here
      </button>
    </div>
    <div className="bg-black p-30">
      <div className="flex justify-between ">
        <img src={image1} className=" h-110 w-120 ml-1"></img>
        <div className="mr-5">
          <h2 className="text-yellow-200 font-bold text-5xl">Our Story</h2>
          <br />
          <div className="text-white text-3xl w-100 text-justify">
            At Van Lang Tour, we believe that every journey holds the promise of
            adventure, discovery, and unforgettable memories. Established with a
            passion for travel and a commitment to seamless experiences, we are
            your trusted partner in exploring the world through train travel.
          </div>
        </div>
      </div>
      <div className="flex mt-30 justify-between">
        <div className="">
          <h2 className="text-yellow-200 font-bold text-5xl">Who We Are</h2>
          <br />
          <div className="text-white text-3xl w-100 text-justify">
            Van Lang Tour is a dedicated online platform designed to
            revolutionize the way you embark on train journeys. Whether you're a
            first-time traveler, a seasoned explorer, or planning a memorable
            trip with family and friends, we're here to make your travel dreams
            a reality.
          </div>
        </div>
        <img src={image2} className=" h-110 w-120 mr-6"></img>
      </div>
      <div className="text-center mt-30">
        <h2 className="text-yellow-200 font-bold text-5xl">Our Mission</h2>
        <br />
        <div className="text-white text-3xl text-justify m-auto w-280 ">
          Our mission is simple: to provide you with a hassle-free and enjoyable
          travel experience. We understand that the journey itself is an
          integral part of your adventure, and that's why we're committed to
          offering a wide selection of train routes, impeccable service, and
          competitive prices.
        </div>
      </div>
    </div>
  </div>
);

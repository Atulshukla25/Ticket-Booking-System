import React from "react";
import home from "../assets/home.png";
import monitor from "../assets/Monitor.png";
import internet from "../assets/Internet.png";
import section2 from "../assets/section2.png";
import box1 from "../assets/box1.png";
import box2 from "../assets/box2.png";
import box3 from "../assets/box3.png";
import TrainDetails from "../components/trainDetails";
export const Home = () => (
  <>
    <div className="">
      <div className="">
        <img className="w-full relative " src={home}></img>
      </div>
      <div className=" absolute top-80 left-33">
        <h1 className="text-white text-5xl font-bold mb-2">Relax with</h1>
        <h1 className="text-[#CFB165] text-5xl font-bold mb-5 ">
          Van Lang Tour
        </h1>

        <button className="bg-[#CFB165] rounded-md font-bold text-black p-2 text-2xl text-center opacity-75">
          Read More !
        </button>
      </div>
      <div className="bg-amber-100 h-50 flex gap-6 p-8">
        <div className="bg-[#CFB165] rounded-3xl flex text-2xl text-white p-5 items-center ml-18 ">
          <img src={monitor}></img>
          <p>
            It's very easy to order a train ticket online, VLTE-ticket can not
            be lost or forgotten at home.
          </p>
        </div>
        <div className="bg-[#CFB165] rounded-3xl flex text-white text-2xl p-5 items-center mr-18 ">
          <img src={internet}></img>
          <p>
            To order ticket all you need is Internet, a couple minutes and a
            payment card. Grab bonuses and discounts.
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={section2}></img>
        {/* <div className="absolute h-70 opacity-80 w-full bg-black top-0"></div> */}
        <TrainDetails position="absolute" />
        <div className="absolute top-90 ml-35">
          <div className="flex gap-130">
            <p className="text-white font-bold text-3xl ml-5 mb-20">
              Popular Tour Packages
            </p>
            <p className="text-[#CFB165] text-2xl font-bold">/View All Tours</p>
          </div>
          <div className="flex gap-3.5">
            <img src={box1}></img>
            <img src={box2}></img>
            <img src={box3}></img>
            <p className="absolute top-70 ml-27 font-bold text-4xl uppercase text-white">
              hà nội
            </p>
            <p className="absolute top-70 ml-112 font-bold text-4xl uppercase text-white">
              đà nẵng
            </p>
            <p className="absolute top-70 ml-190 font-bold text-4xl uppercase text-white">
              vịnh hạ long
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

// import React from "react";
// import { Link } from "react-router-dom";
// import facebook from "../assets/facebook.png";
// import insta from "../assets/insta.png";

// export const Footer = () => (
//   <>
//     <footer className=" p-20 bg-black text-white">
//       <div>
//         <h1 className="ml-8 text-5xl font-bold ">
//           WE ARE VERY HAPPY
//           <br /> THAT TOU CHOOSE US
//         </h1>
//         <p className="text-m ml-8 mt-5">
//           Thank you for trusting us for choosing trips, exploring, traveling
//           with
//           <br />
//           relatives and friends or for your own experiences.
//         </p>
//         <br />
//         <br />
//       </div>
//       <div className="flex justify-around w-220 ml-100 ">
//         <div>
//           <h2 className="text-[#CFB165] text-4xl font-bold">home</h2>
//           <br />
//           <Link to="/about" className="">
//             About us
//           </Link>
//           <br />
//           <Link to="/booking" className="">
//             Booking
//           </Link>
//         </div>
//         <div>
//           <h2 className="text-[#CFB165] text-4xl font-bold ">contact us</h2>
//           <br />
//           <p>08344239885</p>
//           <p>VanLangTour@gmail.com</p>
//         </div>
//         <div>
//           <h2 className="text-[#CFB165] text-4xl font-bold mr-20">follow us</h2>
//           <br />
//           <div className="flex gap-2 h-1">
//             <img src={insta} className="h-6 w-6"></img>
//             <a href="https://www.instagram.com/chplgroup">Instagram</a>
//           </div>
//           <br />
//           <div className="flex gap-2 h-1">
//             <img src={facebook} className="h-6 w-6"></img>
//             <a href="https://www.instagram.com/chplgroup">Facebook</a>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />

//       <div className="h-5">
//         {/* <hr className="m-20" /> */}
//         <div className=" border-b-2  w-6xl m-auto"></div>
//         <p className="text-xs ml-5 mt-5  bg-black">&copy; VanLangTour 2025 </p>
//       </div>
//     </footer>
//   </>
// );

import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";

export const Footer = () => (
  <>
    <footer className="p-10 lg:p-20 bg-black text-white">
      {/* Main Content */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-5xl font-bold">
          WE ARE VERY HAPPY
          <br /> THAT YOU CHOOSE US
        </h1>
        <p className="text-sm lg:text-base mt-5">
          Thank you for trusting us for choosing trips, exploring, traveling
          with
          <br />
          relatives and friends or for your own experiences.
        </p>
      </div>

      {/* Links and Contact Section */}
      <div className="flex flex-col lg:flex-row justify-around mt-10 lg:mt-20 space-y-10 lg:space-y-0">
        {/* Home Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#CFB165] text-2xl lg:text-4xl font-bold">
            home
          </h2>
          <br />
          <Link to="/about" className="block hover:text-[#CFB165]">
            About us
          </Link><br/>
          <Link to="/booking" className="block hover:text-[#CFB165]">
            Booking
          </Link>
        </div>

        {/* Contact Us Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#CFB165] text-2xl lg:text-4xl font-bold">
            contact us
          </h2>
          <br />
          <p>08344239885</p><br/>
          <p>Tour@gmail.com</p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center lg:text-left">
          <h2 className="text-[#CFB165] text-2xl lg:text-4xl font-bold">
            follow us
          </h2>
          <br />
          <div className="flex justify-center lg:justify-start items-center gap-2">
            <img src={insta} alt="Instagram" className="h-6 w-6" />
            <a
              href="https://www.instagram.com/chplgroup"
              className="hover:text-[#CFB165]"
            >
              Instagram
            </a>
          </div><br/>

          <div className="flex justify-center lg:justify-start items-center gap-2">
            <img src={facebook} alt="Facebook" className="h-6 w-6" />
            <a
              href="https://www.instagram.com/chplgroup"
              className="hover:text-[#CFB165]"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Divider and Copyright Section */}
      <div className="mt-10 lg:mt-20">
        <div className="border-b-1 w-full lg:w-300 mx-auto"></div>
        <p className="text-xs text-center lg:text-left mt-5">
          &copy; VanLangTour 2025
        </p>
      </div>
    </footer>
  </>
);

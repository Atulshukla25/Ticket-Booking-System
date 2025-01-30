// import React from "react";
// import home from "../assets/home.png";
// import logo from "../assets/logo.png";

// export const Login = () => (
//   <div className="relative">
//     <div>
//       <img className="w-full" src={home} />
//     </div>
//     <div className="bg-white opacity-80 p-8 rounded-4xl absolute top-45 left-130 items-center justify-center w-90 h-100 ">
//       <div className="flex gap-3 ">
//         <img src={logo}></img>
//         <h3 className="font-bold text-[#CFB165] text-md">
//           Van Lang
//           <span className="text-black">
//             {" "}
//             Tour <br /> Welcome to Van Lang Tour !
//           </span>
//         </h3>
//       </div>
//       <form className="">
//         <input
//           type="email"
//           placeholder="Phone Number/Email"
//           className="mb-4 w-full p-2 border-b outline-none mt-20"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border-b outline-none "
//         />

//         <div className="flex mt-2 gap-2 justify-between">
//           <div className="flex">
//             <input type="checkbox"></input>
//             <p className="ml-2">Remember me</p>
//           </div>
//           <a href="">Forgot Password?</a>
//         </div>
//         <button className="bg-[#CFB165] p-2 w-18 rounded-2xl ml-27 mt-5 text-black font-bold">
//           Login
//         </button>
//       </form>
//     </div>
//   </div>
// );

import React from "react";
import home from "../assets/home.png";
import logo from "../assets/logo.png";

export const Login = () => (
  <div className="relative min-h-screen">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src={home} alt="Home" />
    </div>

    {/* Login Form */}
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-3xl w-80  max-w-md mx-2 my-45">
        {/* Logo and Title */}
        <div className="flex gap-3 items-center justify-center">
          <img src={logo} alt="Logo" className="w-12 h-12 md:w-16 md:h-16" />
          <h3 className="font-bold text-[#CFB165] text-lg md:text-xl">
            Van Lang
            <span className="text-black">
              {" "}
              Tour <br /> Welcome to Van Lang Tour !
            </span>
          </h3>
        </div>

        {/* Form */}
        <form className="mt-6">
          <input
            type="email"
            placeholder="Phone Number/Email"
            className="mb-4 w-full p-2 border-b outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border-b outline-none"
          />

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <a href="#" className="text-sm text-black  hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="bg-[#CFB165] w-full p-2 rounded-2xl mt-6 text-black font-bold hover:bg-[#b89a5a] transition-colors">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
);

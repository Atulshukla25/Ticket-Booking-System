// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";
// export const Header = () => (
//   <div className="fixed z-10">
//     <header className="p-8 bg-black opacity-75 text-white flex justify-between top-0 left-0 right-0 fixed">
//       <div className="flex items-center justify-around w-full gap-70">
//         <div className="flex items-center justify-around w-60">
//           <img src={logo} />
//           <h1 className="font-bold text-2xl">
//             <span className="text-[#CFB165] text-2xl ">Van Lang</span> Tour
//           </h1>
//         </div>
//         <nav className="m-5">
//           <Link to="/home" className="mx-2 text-2xl font-bold">
//             Home
//           </Link>
//           <Link to="/about" className="mx-2 text-2xl font-bold">
//             About
//           </Link>
//           <Link to="/booking" className="mx-2 text-2xl font-bold">
//             Booking
//           </Link>
//           <Link to="/login" className="mx-2 text-2xl font-bold">
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="mx-2 bg-[#CFB165] p-1 rounded-md text-black text-2xl font-bold"
//           >
//             Signup
//           </Link>
//         </nav>
//       </div>
//     </header>
//   </div>
// );

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiMenu, FiX } from "react-icons/fi"; // Importing icons for menu

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed z-10 w-full">
      <header className="p-4 md:p-8 bg-black opacity-75 h-20 md:h-35 text-white flex justify-between items-center top-0 left-0 right-0 fixed">
        {/* Logo */}
        <div className="flex items-center gap-4 px-10 md:gap-8">
          <img src={logo} className="w-12 h-12 md:w-16 md:h-16" alt="Logo" />
          <h1 className="font-bold text-xl md:text-2xl">
            <span className="text-[#CFB165]">Van Lang</span> Tour
          </h1>
        </div>

        {/* Hamburger Menu Button (Shown on Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
          </button>
        </div>

        {/* Navigation Links - Shown on Desktop */}
        <nav className="hidden md:flex items-center gap-5">
          <Link to="/home" className="text-lg md:text-2xl font-bold">
            Home
          </Link>
          <Link to="/about" className="text-lg md:text-2xl font-bold">
            About
          </Link>
          <Link to="/booking" className="text-lg md:text-2xl font-bold">
            Booking
          </Link>
          <Link to="/login" className="text-lg md:text-2xl font-bold">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-[#CFB165] px-3 py-1 rounded-md text-black text-lg md:text-2xl font-bold"
          >
            Signup
          </Link>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 right-4 bg-black opacity-90 text-white flex flex-col items-start p-4 rounded-md md:hidden">
            <Link
              to="/home"
              className="block py-2 text-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/booking"
              className="block py-2 text-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Booking
            </Link>
            <Link
              to="/login"
              className="block py-2 text-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block bg-[#CFB165] px-3 py-2 mt-2 rounded-md text-black text-lg font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Signup
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

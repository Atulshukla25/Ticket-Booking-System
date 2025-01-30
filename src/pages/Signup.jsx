// import React from "react";
// import home from "../assets/home.png";

// export const Signup = () => (
//   <div className="relative">
//     <div className="h-[150vh]">
//       <img className="w-full h-full" src={home}></img>
//       <form className="absolute pb-30 w-235 h-170 bg-white opacity-90 top-40 ml-50 rounded-4xl">
//         <h1 className="font-bold text-4xl ml-10 mt-8">
//           Ready to join Van Lang Tour? Let's get started{" "}
//         </h1>
//         <h3 className="text-xl ml-10 mt-2">
//           We need a few details about you to create your account profile
//         </h3>

//         <h3 className="text-2xl mt-6 ml-10 font-bold">Preferred Language *</h3>
//         <select className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white text-xl w-90 h-10 rounded-xl">
//           <option>Punjabi</option>
//           <option>English</option>
//           <option>Hindi</option>
//           <option>Gujarati</option>
//         </select>
//         <h3 className="text-2xl mt-6 ml-10 font-bold">Name *</h3>
//         <h3 className="text-xl ml-10 mt-2 mb-3">
//           In order to earn and redeem points, your name must match the name on
//           your government issued ID photo used when travelling.
//         </h3>
//         <div>
//           <div className="">
//             <input
//               className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white font-bold text-xl w-90 h-10 rounded-xl"
//               type="text"
//               placeholder="Last name"
//             />
//             <input
//               className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0 text-white font-bold text-xl w-90 h-10 rounded-xl"
//               type="text"
//               placeholder="Middle name"
//             />
//           </div>
//           <div>
//             <input
//               className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white font-bold text-xl w-90 h-10 rounded-xl"
//               type="text"
//               placeholder="First name"
//             />
//             <select className="bg-[#CFB165] ml-10 mt-3 px-4 outline-0  text-white text-xl w-90 h-10 rounded-xl">
//               <option>Male</option>
//               <option>Female</option>
//               <option>Other</option>
//             </select>
//           </div>
//           <div>
//             <h3 className="text-2xl mt-6 ml-10 font-bold mb-2 ">
//               Date of birth *
//             </h3>
//             <input
//               className="bg-[#CFB165] ml-10 mt-3 px-4  text-white text-xl outline-0  w-191 h-10 rounded-xl"
//               type="date"
//               placeholder="Middle name"
//             />
//           </div>
//           <button className="font-bold bg-[#CFB165] rounded-2xl ml-200 mt-10  w-20 text-2xl h-10">
//             Next
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// );

import React from "react";
import home from "../assets/home.png";

export const Signup = () => (
  <div className="relative min-h-screen">
    {/* Background Image */}
    <div className="absolute inset-0">
      <img className="w-full h-full object-cover" src={home} alt="Home" />
    </div>

    {/* Signup Form */}
    <div className="relative flex justify-center items-center min-h-screen">
      <form className="bg-white bg-opacity-90 p-6 md:p-8 rounded-3xl w-full mt-30 md:mt-50 mb-10 md:mb-30 max-w-4xl mx-4">
        {/* Form Title */}
        <h1 className="font-bold text-2xl md:text-4xl mb-4">
          Ready to join Van Lang Tour? Let's get started
        </h1>
        <h3 className="text-lg md:text-xl mb-6">
          We need a few details about you to create your account profile
        </h3>

        {/* Preferred Language */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Preferred Language *
          </h3>
          <select className="bg-[#CFB165] w-full p-2 text-white text-lg md:text-xl rounded-lg outline-none">
            <option>Punjabi</option>
            <option>English</option>
            <option>Hindi</option>
            <option>Gujarati</option>
          </select>
        </div>

        {/* Name Fields */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Name *</h3>
          <p className="text-lg md:text-xl mb-4">
            In order to earn and redeem points, your name must match the name on
            your government-issued ID photo used when traveling.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="bg-[#CFB165] w-full p-2 text-white text-lg md:text-xl rounded-lg outline-none"
              type="text"
              placeholder="Last name"
            />
            <input
              className="bg-[#CFB165] w-full p-2 text-white text-lg md:text-xl rounded-lg outline-none"
              type="text"
              placeholder="Middle name"
            />
            <input
              className="bg-[#CFB165] w-full p-2 text-white text-lg md:text-xl rounded-lg outline-none"
              type="text"
              placeholder="First name"
            />
            <select className="bg-[#CFB165] w-full p-2 text-white text-lg md:text-xl rounded-lg outline-none">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Date of birth *
          </h3>
          <input
            className="bg-[#CFB165] w-full p-2 text-white text-lg md:text-xl rounded-lg outline-none"
            type="date"
          />
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button className="bg-[#CFB165] px-6 py-2 text-black font-bold text-lg md:text-xl rounded-2xl hover:bg-[#b89a5a] transition-colors">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
);

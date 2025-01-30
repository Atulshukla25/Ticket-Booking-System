// import React from "react";
// import { FaTrainSubway } from "react-icons/fa6";
// import { MdNavigateNext } from "react-icons/md";

// const Card = () => {
//   return (
//     <div className="w-[150vh] h-[30vh] rounded-2xl items-center bg-white opacity-85 m-auto flex justify-between overflow-hidden">
//       <div className="flex w-full justify-around">
//         <div className="flex gap-5 ">
//           <div className="flex flex-col text-4xl font-bold items-center">
//             <div>12:00</div>
//             <div className="text-lg text-gray-700">Sai Gon</div>
//           </div>
//           <FaTrainSubway className="text-5xl mt-5" />
//           <div className="flex flex-col text-4xl font-bold items-center">
//             <div>12:00</div>
//             <div className="text-lg text-gray-700">Ha Noi</div>
//           </div>
//         </div>
//         <div className="flex flex-col relative">
//           <div className="text-2xl ">first class - 24hrs00min travel<br></br>
//             <select className="text-lg text-[#CFB165] font-bold">
//               <option >Details</option>
//               <option >Details</option>
//               <option >Details</option>
//               <option >Details</option>
//             </select>
//           </div>
//           <div className="w-100 absolute top-20 ml-15 font-bold text-2xl">
//             {" "}
//             Price <span className="text-[#CFB165]">1,000,000 <span className="text-black">VND</span></span>
//           </div>
//         </div>
//       </div>
//       <div className="h-full bg-[#CFB165] px-5 flex items-center">
//         <MdNavigateNext className="text-3xl font-bold h-10 w-10" />
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";
import { FaTrainSubway } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";

const Card = () => {
  return (
    <div className="w-full max-w-4xl h-auto md:h-[30vh] rounded-2xl bg-white bg-opacity-85 mx-auto my-4 p-6 md:p-8 flex flex-col md:flex-row justify-between items-center overflow-hidden">
      {/* Left Section: Train Times and Icons */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
        <div className="flex flex-col text-2xl md:text-4xl font-bold items-center">
          <div>12:00</div>
          <div className="text-base md:text-lg text-gray-700">Sai Gon</div>
        </div>
        <FaTrainSubway className="text-3xl md:text-5xl mt-4 md:mt-5" />
        <div className="flex flex-col text-2xl md:text-4xl font-bold items-center">
          <div>12:00</div>
          <div className="text-base md:text-lg text-gray-700">Ha Noi</div>
        </div>
      </div>

      {/* Middle Section: Details and Price */}
      <div className="flex flex-col items-center md:items-start mt-6 md:mt-0 w-full md:w-auto">
        <div className="text-xl md:text-2xl text-center md:text-left">
          First class - 24hrs 00min travel
          <br />
          <select className="text-base md:text-lg text-[#CFB165] font-bold mt-2 md:mt-0">
            <option>Details</option>
            <option>Details</option>
            <option>Details</option>
            <option>Details</option>
          </select>
        </div>
        <div className="text-xl md:text-2xl font-bold ml-35 mt-4 md:mt-8">
          Price{" "}
          <span className="text-[#CFB165]">
            1,000,000 <span className="text-black">VND</span>
          </span>
        </div>
      </div>

      {/* Right Section: Next Button */}
      <div className="h-12 md:h-50 bg-[#CFB165] px-4 md:px-6 flex items-center justify-center mt-6 md:mt-0 w-full md:w-auto">
        <MdNavigateNext className="text-2xl md:text-3xl font-bold" />
      </div>
    </div>
  );
};

export default Card;

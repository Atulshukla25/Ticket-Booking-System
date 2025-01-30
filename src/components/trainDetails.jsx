// import React from "react";

// const TrainDetails = ({ position }) => {
//   return (
//     <div
//       className={`${position} bg-[rgba(0,0,0,0.8)] w-screen top-0 flex justify-between gap-14.5 p-20 px-30`}
//     >
//       <div>
//         <p className="text-white font-bold text-2xl mb-2 ">Keywords</p>
//         <input
//           type="text"
//           placeholder="Enter keyword..."
//           className="bg-[#CFB165] rounded-2xl w-43 h-15 flex items-center text-lg text-white font-bold px-3"
//         ></input>
//       </div>
//       <div>
//         <p className="text-white font-bold text-2xl mb-2 ">Activity</p>
//         <select className="bg-[#CFB165] px-3 font-bold text-lg rounded-2xl w-43 h-15 justify-center flex items-center text-white">
//           <option>Any</option>
//           <option>Any</option>
//           <option>Any</option>
//           <option>Any</option>
//           <option>Any</option>
//         </select>
//       </div>
//       <div>
//         <p className="text-white font-bold text-2xl mb-2">Destination</p>
//         <select className="bg-[#CFB165] px-3 rounded-2xl text-lg font-bold w-43 h-15 justify-center flex items-center text-white">
//           <option>Kashmir</option>
//           <option>Ladakh</option>
//           <option>Bombay</option>
//           <option>Punjab</option>
//           <option>Goa</option>
//         </select>
//       </div>
//       <div>
//         <p className="text-white font-bold text-2xl mb-2">Date</p>
//         <input
//           type="date"
//           className="bg-[#CFB165] px-3 text-lg font-bold rounded-2xl w-43 h-15 text-white"
//         ></input>
//       </div>
//       <button className="mt-10 rounded-2xl h-15 w-45 text-xl font-bold bg-[#CFB165] text-white">
//         Search
//       </button>
//     </div>
//   );
// };

// export default TrainDetails;


import React from "react";

const TrainDetails = ({ position }) => {
  return (
    <div
      className={`${position} bg-[rgba(0,0,0,0.8)] w-full top-0 flex flex-col md:flex-row justify-between gap-4 md:gap-8 p-6 md:p-8 lg:p-20`}
    >
      {/* Keywords Input */}
      <div className="w-full md:w-auto">
        <p className="text-white font-bold text-lg md:text-2xl mb-2">Keywords</p>
        <input
          type="text"
          placeholder="Enter keyword..."
          className="bg-[#CFB165] rounded-2xl w-full md:w-48 h-12 md:h-15 flex items-center text-base md:text-lg text-white font-bold px-3 outline-none"
        />
      </div>

      {/* Activity Dropdown */}
      <div className="w-full md:w-auto">
        <p className="text-white font-bold text-lg md:text-2xl mb-2">Activity</p>
        <select className="bg-[#CFB165] px-3 font-bold text-base md:text-lg rounded-2xl w-full md:w-48 h-12 md:h-15 flex items-center text-white outline-none">
          <option>Any</option>
          <option>Any</option>
          <option>Any</option>
          <option>Any</option>
          <option>Any</option>
        </select>
      </div>

      {/* Destination Dropdown */}
      <div className="w-full md:w-auto">
        <p className="text-white font-bold text-lg md:text-2xl mb-2">Destination</p>
        <select className="bg-[#CFB165] px-3 font-bold text-base md:text-lg rounded-2xl w-full md:w-48 h-12 md:h-15 flex items-center text-white outline-none">
          <option>Kashmir</option>
          <option>Ladakh</option>
          <option>Bombay</option>
          <option>Punjab</option>
          <option>Goa</option>
        </select>
      </div>

      {/* Date Input */}
      <div className="w-full md:w-auto">
        <p className="text-white font-bold text-lg md:text-2xl mb-2">Date</p>
        <input
          type="date"
          className="bg-[#CFB165] px-3 font-bold text-base md:text-lg rounded-2xl w-full md:w-48 h-12 md:h-15 text-white outline-none"
        />
      </div>

      {/* Search Button */}
      <div className="w-full md:w-auto flex items-end">
        <button className="w-full md:w-48 h-12 md:h-15 text-base md:text-xl font-bold bg-[#CFB165] text-white rounded-2xl hover:bg-[#b89a5a] transition-colors">
          Search
        </button>
      </div>
    </div>
  );
};

export default TrainDetails;
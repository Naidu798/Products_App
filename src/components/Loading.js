import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <p className="h-8 w-8 sm:h-10 sm:w-10 border-4 border-cyan-500 rounded-full border-b-white mr-3 animate-spin"></p>
      <span className="text-md sm:text-lg text-gray-900">Loading...</span>
    </div>
  );
};

export default Loading;

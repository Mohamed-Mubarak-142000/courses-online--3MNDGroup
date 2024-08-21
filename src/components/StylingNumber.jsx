import React from "react";

const StylingNumber = ({ number }) => {
  return (
    <div className="numberStyling bg-tertiary w-[40px] h-[40px] text-md rounded-md relative flex justify-center items-center text-white text-center">
      {number}
    </div>
  );
};

export default StylingNumber;

import React from "react";
import TextInput from "../common/TextInput";

const FourRowForm = ({ rating, setRating, date, setDate }) => {
  return (
    <div className="flex items-center gap-5 flex-wrap w-full justify-between">
      <div className="w-full lg:w-[48%] ">
        <TextInput
          label="Rating"
          onChange={(e) => setRating(e.target.value)}
          type="number"
          textColor="black"
          value={rating}
        />
      </div>
      <div className="w-full lg:w-[48%] ">
        <TextInput
          label="Date"
          onChange={(e) => setDate(e.target.value)}
          type="date"
          textColor="black"
          value={date}
        />
      </div>
    </div>
  );
};

export default FourRowForm;

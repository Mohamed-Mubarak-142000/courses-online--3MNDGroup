import React from "react";
import TextInput from "../common/TextInput";

const SecondRowForm = ({ duration, setDuration, hours, setHours }) => {
  return (
    <div className="flex items-center gap-5 flex-wrap w-full justify-between">
      <div className="w-[48%]">
        <TextInput
          label="Duration"
          onChange={(e) => setDuration(e.target.value)}
          type="number"
          value={duration}
          textColor="black"
          required
        />
      </div>
      <div className="w-[48%]">
        <TextInput
          label="Hours"
          onChange={(e) => setHours(e.target.value)}
          type="number"
          textColor="black"
          value={hours}
          required
        />
      </div>
    </div>
  );
};

export default SecondRowForm;

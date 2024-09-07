import React from "react";
import SelectInput from "../common/SelectInput";
import TextInput from "../common/TextInput";
import { dataLevels } from "../utils/data";

const ThirdRowForm = ({ level, setLevel, category, setCategory }) => {
  return (
    <div className="flex items-center gap-5 flex-wrap w-full justify-between">
      <div className="w-full lg:w-[48%]">
        <SelectInput
          label="Level"
          onChange={(e) => setLevel(e.target.value)}
          value={level}
          textColor="black"
          data={dataLevels}
          required
        />
      </div>
      <div className="w-full w-[48%]">
        <TextInput
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          textColor="black"
          value={category}
          required
        />
      </div>
    </div>
  );
};

export default ThirdRowForm;

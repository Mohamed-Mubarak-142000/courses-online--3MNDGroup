import React from "react";
import TextInput from "../common/TextInput";

const FristRowForm = ({ name, setName, price, setPrice }) => {
  return (
    <div className="flex items-center gap-5 flex-wrap w-full justify-between">
      <div className="w-[48%]">
        <TextInput
          label="Name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          textColor="black"
          required
        />
      </div>
      <div className="w-[48%]">
        <TextInput
          label="Price"
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          textColor="black"
          value={price}
          required
        />
      </div>
    </div>
  );
};

export default FristRowForm;

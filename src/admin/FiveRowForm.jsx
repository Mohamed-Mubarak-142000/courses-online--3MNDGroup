import React from "react";
import TextInput from "../common/TextInput";

const FiveRowForm = ({ description, setDescription, image, setImage }) => {
  return (
    <div className="flex items-center gap-5 flex-wrap w-full justify-between">
      <div className="w-full lg:w-[48%]">
        <TextInput
          label="Description"
          onChange={(e) => setDescription(e.target.value)}
          textColor="black"
          type="text"
          value={description}
          required
        />
      </div>
      <div className="w-full lg:w-[48%]">
        <TextInput
          label="Image URL"
          onChange={(e) => setImage(e.target.value)}
          type="text"
          textColor="black"
          value={image}
          required
        />
      </div>
    </div>
  );
};

export default FiveRowForm;

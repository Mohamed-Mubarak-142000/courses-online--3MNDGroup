import { Chip } from "@mui/material";
import React from "react";

const Chips = ({ data }) => {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      {data?.topics?.map((topic) => (
        <Chip label={topic} variant="outlined" />
      ))}
    </div>
  );
};

export default Chips;

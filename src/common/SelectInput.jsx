import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectInput = ({ value, label, onChange, data }) => {
  //handle category unique from data
  let unique = [...new Set(data?.data.map((item) => item.category))];

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{value || label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={onChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCD980",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCD980",
          },
        }}
      >
        {unique.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectInput;

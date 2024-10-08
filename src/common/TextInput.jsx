import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({
  label,
  type,
  value,
  onChange,
  textColor = "#fff",
  reading = false,
}) => {
  return (
    <TextField
      value={value}
      onChange={onChange}
      fullWidth
      label={label}
      type={type}
      variant="outlined"
      margin="normal"
      required
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "gray", // Default border color
          },
          "&:hover fieldset": {
            borderColor: "#FCD980", // Hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FCD980", // Focused border color
          },
        },
        "& .MuiInputLabel-root": {
          color: "gray",
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#FCD980",
        },
        "& .MuiInputBase-input": {
          color: textColor, // Text color
        },
      }}
      inputProps={{ readOnly: reading }}
    />
  );
};

export default TextInput;

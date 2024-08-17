// PasswordInput.js
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const PasswordInput = ({
  showPassword,
  onClickShowPassword,
  onMouseDownPassword,
  value,
  onChange,
}) => {
  return (
    <FormControl fullWidth variant="outlined" margin="normal">
      <InputLabel
        htmlFor="outlined-adornment-password"
        sx={{
          color: "gray",
          "&.Mui-focused": {
            color: "#FCD980",
          },
        }}
      >
        Password
      </InputLabel>

      <OutlinedInput
        id="outlined-adornment-password"
        value={value}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFD54F",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCD980",
          },
          "& .MuiInputBase-input": {
            color: "#fff", // Text color
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={onClickShowPassword}
              onMouseDown={onMouseDownPassword}
              edge="end"
              sx={{ color: "gray" }}
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
    </FormControl>
  );
};

export default PasswordInput;

// FormAuth.js
import { Grid, Button, Typography } from "@mui/material";
import React, { useState, useCallback } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [userNameData, setUserNameData] = useState("");

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prevShow) => !prevShow);
  }, []);

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(emailData, passwordData);
    },
    [emailData, passwordData]
  );

  const handleChangeEmail = useCallback((event) => {
    setEmailData(event.target.value);
    console.log(event.target.value);
  }, []);

  const handleChangePassword = useCallback((event) => {
    setPasswordData(event.target.value);
    console.log(event.target.value);
  }, []);

  const handleChangeUserName = useCallback((event) => {
    setUserNameData(event.target.value);
    console.log(event.target.value);
  }, []);

  return (
    <Grid
      item
      xs={12}
      lg={6}
      sx={{
        height: "100vh",
        backgroundColor: "#1C1E53",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Typography variant="h3" gutterBottom sx={{ color: "#fff" }}>
          Register
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
          Please enter your credentials to login.
        </Typography>

        <TextInput
          label="UserName"
          type="text"
          value={userNameData}
          onChange={handleChangeUserName}
        />

        <TextInput
          label="Email"
          type="email"
          value={emailData}
          onChange={handleChangeEmail}
        />
        <PasswordInput
          value={passwordData}
          showPassword={showPassword}
          onClickShowPassword={handleClickShowPassword}
          onMouseDownPassword={handleMouseDownPassword}
          onChange={handleChangePassword}
        />
        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{
            marginTop: 2,
            padding: "0.5rem",
            backgroundColor: "#FCD980",
            color: "#1C1E53",
            fontWeight: "bold",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#e2ba53",
            },
          }}
        >
          Register
        </Button>

        <Typography
          variant="body1"
          gutterBottom
          sx={{
            color: "#fff",
            width: "100%",
            textAlign: "center",
            padding: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Do have an account?{" "}
          <Link to="/login" className="font-bold underline text-primary">
            login now
          </Link>
        </Typography>
      </form>
    </Grid>
  );
};

export default FormRegister;

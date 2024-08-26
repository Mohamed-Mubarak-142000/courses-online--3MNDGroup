import { Grid, Button, Typography } from "@mui/material";
import React, { useState, useCallback, useContext, useEffect } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import useCustomMutation from "./../hooks/useCustomMutation";
import AlertSnackbar from "./AlertSnackbar";
import { ApiContext } from "../store/ApiContext";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [userNameData, setUserNameData] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // 'success' or 'error'
  const navigate = useNavigate();
  const { user } = useContext(ApiContext);

  const { isLoading, mutate } = useCustomMutation({
    title: "Register",
    endPoint: "users",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
      console.log(user);
    }
  }, [user, navigate]);

  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prevShow) => !prevShow);
  }, []);

  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const registrationData = {
        username: userNameData,
        email: emailData,
        password: passwordData,
      };
      try {
        mutate(registrationData);
        setSnackbarMessage("Registration successful!");
        setSnackbarSeverity("success");
        navigate("/login");
      } catch (error) {
        console.error(error);
        setSnackbarMessage("Registration failed. Please try again.");
        setSnackbarSeverity("error");
      }
      setOpenSnackbar(true);
    },
    [emailData, passwordData, userNameData, navigate, mutate]
  );

  const handleChangeEmail = useCallback((event) => {
    setEmailData(event.target.value);
  }, []);

  const handleChangePassword = useCallback((event) => {
    setPasswordData(event.target.value);
  }, []);

  const handleChangeUserName = useCallback((event) => {
    setUserNameData(event.target.value);
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
          Please enter your credentials to register.
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
          disabled={isLoading} // Disable button while loading
        >
          {isLoading ? "Registering..." : "Register"}
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
            Login now
          </Link>
        </Typography>
      </form>

      <AlertSnackbar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </Grid>
  );
};

export default FormRegister;

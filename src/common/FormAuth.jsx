import { Grid, Button, Typography } from "@mui/material";
import React, { useState, useCallback, useContext, useEffect } from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import useFetching from "./../hooks/useFetching";
import AlertSnackbar from "./AlertSnackbar";
import { ApiContext } from "./../store/ApiContext";

const FormAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();
  const { userLogin, user } = useContext(ApiContext);
  const { loading, data, refetch } = useFetching({
    title: "Login",
    endPoint: "users",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
      console.log(user);
    }
  }, [user, navigate]);

  useEffect(() => {
    refetch();
  }, [refetch, data?.data]);
  console.log(data?.data);
  // Handler for show password
  const handleClickShowPassword = useCallback(() => {
    setShowPassword((prevShow) => !prevShow);
  }, []);

  // Handlers for input fields
  const handleMouseDownPassword = useCallback((event) => {
    event.preventDefault();
  }, []);

  // Form submit handler
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const user = data?.data?.find(
          (user) => user.email === emailData && user.password === passwordData
        );
        if (user) {
          userLogin(user);
          if (user.role === "user") {
            navigate("/");
          } else {
            navigate("/dashboard");
          }
          setSnackbarMessage("Login successful!");
          setSnackbarSeverity("success");
        } else {
          setSnackbarMessage("Login failed. Please check your credentials.");
          setSnackbarSeverity("error");
        }
        setOpenSnackbar(true);
      } catch (error) {
        console.error("Error during login:", error);
        setSnackbarMessage("An error occurred. Please try again.");
        setSnackbarSeverity("error");
        setOpenSnackbar(true);
      }
    },
    [emailData, passwordData, data, navigate, userLogin]
  );

  // Handlers for input fields
  const handleChange = useCallback(
    (setter) => (event) => {
      setter(event.target.value);
    },
    []
  );

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
          Login
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
          Please enter your credentials to login.
        </Typography>

        <TextInput
          label="Email"
          type="email"
          value={emailData}
          onChange={handleChange(setEmailData)}
        />
        <PasswordInput
          value={passwordData}
          showPassword={showPassword}
          onClickShowPassword={handleClickShowPassword}
          onMouseDownPassword={handleMouseDownPassword}
          onChange={handleChange(setPasswordData)}
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
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </Button>

        <Typography
          variant="body1"
          sx={{
            color: "#fff",
            textAlign: "center",
            padding: "0.5rem",
            marginTop: "1rem",
          }}
        >
          Don't have an account?{" "}
          <Link to="/register" className="font-bold underline text-primary">
            Register now
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

export default FormAuth;

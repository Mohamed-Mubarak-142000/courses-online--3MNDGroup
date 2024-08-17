import { Grid } from "@mui/material";
import React from "react";
import TitleAuth from "./../components/TitleAuth";
import FormAuth from "../common/FormAuth";

const Login = () => {
  return (
    <section className="login min-h-[100vh] flex items-center justify-center ">
      <Grid container>
        <TitleAuth />
        <FormAuth />
      </Grid>
    </section>
  );
};

export default Login;

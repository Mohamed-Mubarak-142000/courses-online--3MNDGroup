import { Grid } from "@mui/material";
import React from "react";
import TitleAuth from "../components/TitleAuth";
import FormRegister from "../common/FormRegister";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className="login min-h-[100vh] flex items-center justify-center ">
        <Grid container>
          <FormRegister />
          <TitleAuth />
        </Grid>
      </section>
    </>
  );
};

export default Register;

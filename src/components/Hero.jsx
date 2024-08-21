import { Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imageHero from "../images/hero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="bg-secondary min-h-[60vh] place-content-center">
      <div className="container mt-10 md:mt-0">
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "20px",
              minHeight: "70vh",
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
              Build and Make Dreams Come True With{" "}
              <span className="text-primary uppercase">coursatak.!</span>
            </Typography>

            <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
              <span className="text-primary uppercase">coursatak</span> is a
              free online course and training service which aims to help you
              achieve your dreams in the field of technology.
            </Typography>

            {/***button  */}
            <Button
              component={Link}
              to="/courses"
              variant="contained"
              sx={{
                width: "200px",
                height: "50px",
                backgroundColor: "#FCD980",
                color: "#000",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e2ba53",
                  color: "#000",
                },
              }}
            >
              View Courses
            </Button>
          </Grid>
          <Grid item md={6} sx={{ display: { xs: "none", md: "flex" } }}>
            {/* image card  */}
            <CardMedia
              component="img"
              image={imageHero}
              alt="Paella dish"
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Hero;

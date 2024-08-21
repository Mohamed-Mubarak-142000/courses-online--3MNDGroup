import { CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import imageHero from "../images/about.png";

const About = () => {
  return (
    <section className="min-h-[40vh] place-content-center lg:my-32 mt-5 px-3 lg:px-20">
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            }}
          >
            About Us
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            <span className="text-tertiary uppercase font-bold">coursatak</span>{" "}
            Free E-Learning Services To Help You Grow
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            }}
          >
            It is hoped that coursatak can become a useful service in the future
            in the field of education.
          </Typography>
        </Grid>

        <Grid item md={6} sx={{ display: { xs: "flex" } }}>
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
    </section>
  );
};

export default About;

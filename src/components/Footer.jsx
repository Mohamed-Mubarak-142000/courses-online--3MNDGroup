import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <section className="min-h-[40vh] bg-secondary text-white p-3 place-content-center">
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
            Build and Make Dreams Come True With{" "}
            <span className="text-primary uppercase">coursatak.!</span>
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ color: "#fff" }}>
            <span className="text-primary uppercase">coursatak</span> is a free
            online course and training service which aims to help you achieve
            your dreams in the field of technology.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: "#FCD980" }}>
            Quick Links
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
            Home
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
            About
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
            Contact
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: "#FCD980" }}>
            Contact Us
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
            123, Main Street, City, Country
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
            Phone: +123456789
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#fff" }}>
            Email: 0JQpK@example.com
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Footer;

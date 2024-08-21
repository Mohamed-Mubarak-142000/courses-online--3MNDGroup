import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Frequantlys from "./../common/Frequantlys";

const Frequantly = () => {
  return (
    <section className="my-10 px-4 lg:px-10">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
              marginTop: "20px",
            }}
          >
            Coursatak has been trusted by more than 10,000 students{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Link to="/faq">
            <Button
              variant="outlined"
              color="warning"
              sx={{
                fontSize: { xs: "0.75rem", sm: "1rem", md: "1rem" },
                textTransform: "none",
                marginTop: "20px",
                display: { xs: "flex" },
                justifyContent: { xs: "center" },
                alignItems: { xs: "center" },
                width: { xs: "100%", md: "50%" },
                marginLeft: { xs: "0", md: "auto" },
              }}
            >
              View All Frq
            </Button>
          </Link>
          <Frequantlys number={3} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Frequantly;

import { Grid, Typography } from "@mui/material";
import React from "react";

const Statistic = () => {
  return (
    <section className="w-full bg-bg_block min-h-[30vh] p-2 place-content-center">
      <Grid
        container
        sx={{ justifyContent: "center", alignItems: "center", gap: "20px" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            height: "250px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            21.000+
          </Typography>

          <Typography variant="h5" sx={{ color: "#282938" }} gutterBottom>
            Registered students{" "}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            height: "250px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            200+
          </Typography>

          <Typography variant="h5" sx={{ color: "#282938" }} gutterBottom>
            Expert Instructor{" "}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            height: "250px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            150+
          </Typography>

          <Typography variant="h5" sx={{ color: "#282938" }} gutterBottom>
            Free Courses{" "}
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Statistic;

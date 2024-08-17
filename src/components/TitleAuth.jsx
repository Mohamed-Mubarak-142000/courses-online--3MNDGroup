import { Grid } from "@mui/material";
import React from "react";

const TitleAuth = () => {
  return (
    <Grid
      item
      lg={6}
      sx={{
        display: { xs: "none", lg: "flex" },
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <div className="w-[400px] text-5xl font-semibold text-primary_text">
        <h2>Selangkah Lebih Dekat Dengan Impianmu</h2>
      </div>

      <div className="w-[400px] text-xl text-secondary_text">
        <h5>
          Sebuah layanan E-Learning gratis yang siap membantumu menjadi seorang
          ahli{" "}
        </h5>
      </div>
    </Grid>
  );
};

export default TitleAuth;

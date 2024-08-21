import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const CardSkeleton = () => {
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {" "}
      {Array.from(new Array(4)).map((item, index) => (
        <Box
          key={index}
          item
          xs={12}
          md={6}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "10px",
            p: 2,
            color: "black",
            height: "250px",
            backgroundColor: "#EEF4FA",
          }}
        >
          {" "}
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default CardSkeleton;

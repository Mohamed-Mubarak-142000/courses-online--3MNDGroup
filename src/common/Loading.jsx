import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: background color for better visibility
        zIndex: 1000, // Ensures it appears above other content
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loading;

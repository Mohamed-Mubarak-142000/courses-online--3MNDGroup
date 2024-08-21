import React from "react";
import { Typography } from "@mui/material";
import ReactPlayer from "react-player";
const MainVideo = ({ mainVideo, data }) => {
  //filter the main video by url
  const mainVideoUrl = data?.data?.videos?.find(
    (video) => video.url === mainVideo
  );

  return (
    <section className="mb-20 mx-2 lg:mx-12">
      <ReactPlayer
        url={mainVideo}
        width="100%"
        controls
        height="500px" // Adjusted the height for better display
      />
      <Typography variant="h4" sx={{ mt: 2 }}>
        {mainVideoUrl?.title}
      </Typography>
    </section>
  );
};

export default MainVideo;

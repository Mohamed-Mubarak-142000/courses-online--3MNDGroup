import React from "react";
import useFetching from "./../hooks/useFetching";
import { CircularProgress } from "@mui/material";
import Error from "./../common/Error";
import ReactPlayer from "react-player";

const ListVideos = ({ courseId, handleSelectedUrlVideo }) => {
  const { data, error, isLoading } = useFetching({
    title: "List Videos",
    endPoint: `courses/${courseId}`,
  });

  const isLogin = false; // Change this value based on actual login state

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-28">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex gap-2 flex-wrap p-2">
      {data?.data?.videos?.map((video, index) => (
        <div
          key={video.url}
          onClick={() => {
            if (isLogin || index === 0) {
              handleSelectedUrlVideo(video.url);
            }
          }}
          className={
            isLogin || index === 0
              ? "cursor-pointer"
              : "cursor-not-allowed opacity-50"
          }
        >
          <ReactPlayer
            url={video.url}
            width="100%"
            controls
            height="150px"
            config={{
              file: {
                attributes: {
                  controlsList: !isLogin && index !== 0 ? "nodownload" : "",
                },
              },
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ListVideos;

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
      {data?.data?.videos?.map((video) => (
        <div key={video.url} onClick={() => handleSelectedUrlVideo(video.url)}>
          <ReactPlayer url={video.url} width="100%" controls height="150px" />
        </div>
      ))}
    </div>
  );
};

export default ListVideos;

import React, { useContext } from "react";
import useFetching from "./../hooks/useFetching";
import { CircularProgress } from "@mui/material";
import Error from "./../common/Error";
import ReactPlayer from "react-player";
import { ApiContext } from "../store/ApiContext";

const ListVideos = ({ courseId, handleSelectedUrlVideo }) => {
  const { user } = useContext(ApiContext);
  const { data, error, isLoading } = useFetching({
    title: "List Videos",
    endPoint: `courses/${courseId}`,
  });

  const isCarted = user?.products?.some((item) => item.id === courseId);

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
            if (isCarted || index === 0) {
              handleSelectedUrlVideo(video.url);
            }
          }}
          className={
            isCarted || index === 0
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
                  controlsList: !isCarted && index !== 0 ? "nodownload" : "",
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

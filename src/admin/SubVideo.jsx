import React, { useEffect } from "react";
import TextInput from "../common/TextInput";

const SubVideo = ({
  setVideoTitle,
  setVideoUrl,
  setVideoDuration,
  handleAddVideo,
  handleDeleteVideo,
  videoTitle,
  videoUrl,
  videoDuration,
  videos,
}) => {
  useEffect(() => {
    console.log(videos);
    console.log(videos[0].title);
    console.log(videos[0].videoUrl);
    console.log(videos[0].videoDuration);
  }, [videos]);
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-2">Add Videos</h3>
      <div className="flex items-center gap-5 flex-wrap w-full justify-between">
        <div className="w-full lg:w-[48%]">
          <TextInput
            label="Video Title"
            onChange={(e) => setVideoTitle(e.target.value)}
            type="text"
            textColor="black"
            value={videoTitle || videos[0].title}
          />
        </div>
        <div className="w-full lg:w-[48%]">
          <TextInput
            label="Video URL"
            onChange={(e) => setVideoUrl(e.target.value)}
            type="text"
            textColor="black"
            value={videoUrl || videos[0].url}
          />
        </div>
        <div className="w-full lg:w-[48%]">
          <TextInput
            label="Video Duration"
            onChange={(e) => setVideoDuration(e.target.value)}
            type="text"
            textColor="black"
            value={videoDuration || videos[0].duration}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        onClick={handleAddVideo}
      >
        Add Video
      </button>

      {/* Render the list of added videos */}
      <div className="mt-4">
        <div className="flex items-center justify-between flex-wrap">
          <h4 className="text-lg font-semibold mb-2">Videos List</h4>
          <span>({videos.length}) Video</span>
        </div>
        <ul>
          {videos.map((video, index) => (
            <li
              key={index}
              className="flex justify-between items-center flex-wrap bg-bg_block p-2 rounded mb-2"
            >
              <span>
                {video.title} - {video.url} - {video.duration}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleDeleteVideo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubVideo;

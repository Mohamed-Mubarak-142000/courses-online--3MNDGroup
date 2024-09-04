import React from "react";
import TextInput from "../common/TextInput";

const SubVideo = ({
  setVideoTitle,
  setVideoUrl,
  setVideoDuration,
  handleAddVideo,
  videoTitle,
  videoUrl,
  videoDuration,
  videos,
}) => {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold mb-2">Add Videos</h3>
      <div className="flex items-center gap-5 flex-wrap w-full justify-between">
        <div className="w-[48%]">
          <TextInput
            label="Video Title"
            onChange={(e) => setVideoTitle(e.target.value)}
            type="text"
            textColor="black"
            value={videoTitle}
          />
        </div>
        <div className="w-[48%]">
          <TextInput
            label="Video URL"
            onChange={(e) => setVideoUrl(e.target.value)}
            type="text"
            textColor="black"
            value={videoUrl}
          />
        </div>
        <div className="w-[48%]">
          <TextInput
            label="Video Duration"
            onChange={(e) => setVideoDuration(e.target.value)}
            type="text"
            textColor="black"
            value={videoDuration}
          />
        </div>
        <button
          type="button"
          onClick={handleAddVideo}
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Video
        </button>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold mb-2">Videos List</h3>
        {videos.length > 0 ? (
          <ul className="list-disc ml-5">
            {videos.map((video, index) => (
              <li key={index}>
                <strong>{video.title}</strong> - {video.url} ({video.duration})
              </li>
            ))}
          </ul>
        ) : (
          <p>No videos added yet.</p>
        )}
      </div>
    </div>
  );
};

export default SubVideo;

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import FristRowForm from "./../admin/FristRowForm";
import SubVideo from "./../admin/SubVideo";
import InstructorRow from "./../admin/InstructorRow";
import FiveRowForm from "./../admin/FiveRowForm";
import FourRowForm from "./../admin/FourRowForm";
import ThirdRowForm from "./../admin/ThirdRowForm";
import SecondRowForm from "./../admin/SecondRowForm";
import useUpdated from "../hooks/useUpdated";
import Error from "./../common/Error";
import Loading from "./../common/Loading";
const formatDate = (date) => new Date(date).toISOString().split("T")[0];

const CustomModal = ({ open, handleClose, title, onConfirm, course }) => {
  const [name, setName] = useState(course.title || "");
  const [price, setPrice] = useState(course.price || "");
  const [duration, setDuration] = useState(course.duration || "");
  const [hours, setHours] = useState(course.hours || "");
  const [level, setLevel] = useState(course.level || "");
  const [category, setCategory] = useState(course.category || "");
  const [rating, setRating] = useState(course.rating || "");
  const [date, setDate] = useState(formatDate(course.date || Date.now()));
  const [description, setDescription] = useState(course.description || "");
  const [image, setImage] = useState(course.image || "");
  const [instructor, setInstructor] = useState(
    course.instructor || {
      id: 0,
      name: "",
      email: "",
      bio: "",
    }
  );
  const [topics, setTopics] = useState(course.topics || []);
  const [numberOfStudents, setNumberOfStudents] = useState(
    course.numberOfStudents || ""
  );
  const [videos, setVideos] = useState(course.videos || []);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState("");

  const { mutate, isError, isLoading } = useUpdated({
    title: "updated course",
    endPoint: `courses/${course.id}`,
  });

  const handleAddVideo = () => {
    if (!videoTitle || !videoUrl || !videoDuration) {
      alert("Please fill all video fields.");
      return;
    }
    const newVideo = {
      title: videoTitle,
      url: videoUrl,
      duration: videoDuration,
    };
    setVideos([...videos, newVideo]);
    setVideoTitle("");
    setVideoUrl("");
    setVideoDuration("");
  };

  const handleDeleteVideo = (index) => {
    const updatedVideos = videos.filter((_, item) => item !== index);
    setVideos(updatedVideos);
    const updatedCourse = {
      title: name,
      price: parseFloat(price),
      duration: parseFloat(duration),
      hours: parseFloat(hours),
      level,
      category,
      rating: parseFloat(rating) || 0,
      date,
      description,
      image,
      instructor,
      topics: topics.map((topic) => topic.trim()).filter((topic) => topic),
      numberOfStudents: parseInt(numberOfStudents, 10) || 0,
      videos: updatedVideos,
    };

    mutate(updatedCourse, {
      onSuccess: () => {
        alert("Video deleted and course updated successfully!");
      },
      onError: (error) => {
        console.error("Error updating course after video deletion:", error);
        alert("Failed to update course. Please try again.");
      },
    });
  };

  const handleUpdatedCourse = (e) => {
    e.preventDefault();
    const updatedCourse = {
      title: name,
      price: parseFloat(price),
      duration: parseFloat(duration),
      hours: parseFloat(hours),
      level,
      category,
      rating: parseFloat(rating) || 0,
      date,
      description,
      image,
      instructor,
      numberOfStudents,
      topics,
      videos,
    };

    mutate(updatedCourse, {
      onSuccess: () => {
        alert("Course Updated successfully!");
      },
      onError: (error) => {
        console.error("Error Updated course:", error);
        alert("Failed to create course. Please try again.");
      },
    });
    onConfirm(updatedCourse);
    handleClose();
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <DialogTitle className="bg-secondary text-white p-2">{title}</DialogTitle>
      <DialogContent className="p-2">
        <form onSubmit={handleUpdatedCourse} className="flex flex-col gap-5">
          {/* Name and Price */}

          <FristRowForm
            name={name}
            setName={setName}
            price={price}
            setPrice={setPrice}
          />

          {/* Duration and Hours */}
          <SecondRowForm
            duration={duration}
            setDuration={setDuration}
            hours={hours}
            setHours={setHours}
          />

          {/* Level and Category */}
          <ThirdRowForm
            level={level}
            setLevel={setLevel}
            category={category}
            setCategory={setCategory}
          />

          {/* Rating and Date */}
          <FourRowForm
            rating={rating}
            setRating={setRating}
            date={date}
            setDate={setDate}
          />

          {/* Description and Image */}
          <FiveRowForm
            description={description}
            setDescription={setDescription}
            image={image}
            setImage={setImage}
          />

          {/* Instructor and Number of Students */}
          <InstructorRow
            instructor={instructor}
            setInstructor={setInstructor}
            numberOfStudents={numberOfStudents}
            setNumberOfStudents={setNumberOfStudents}
            topics={topics}
            setTopics={setTopics}
          />

          {/* Videos Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Videos</h3>
            <SubVideo
              setVideoTitle={setVideoTitle}
              setVideoUrl={setVideoUrl}
              setVideoDuration={setVideoDuration}
              handleAddVideo={handleAddVideo}
              videoTitle={videoTitle}
              videoUrl={videoUrl}
              videoDuration={videoDuration}
              videos={videos}
              handleDeleteVideo={handleDeleteVideo}
            />
          </div>

          <DialogActions className="p-4">
            <Button
              onClick={handleClose}
              color="error"
              className="bg-red-500 hover:bg-red-700 text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              color="primary"
              className="bg-blue-500 hover:bg-blue-700 text-white"
            >
              Confirm
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;

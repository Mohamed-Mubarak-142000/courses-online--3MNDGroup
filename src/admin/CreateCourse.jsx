import React, { useState } from "react";
import useCustomMutation from "../hooks/useCustomMutation";
import { useNavigate } from "react-router-dom";
import FristRowForm from "./FristRowForm";
import SecondRowForm from "./SecondRowForm";
import ThirdRowForm from "./ThirdRowForm";
import FourRowForm from "./FourRowForm";
import FiveRowForm from "./FiveRowForm";
import InstructorRow from "./InstructorRow";
import SubVideo from "./SubVideo";
import Error from "../common/Error";
import Loading from "./../common/Loading";

const formatDate = (date) => new Date(date).toISOString().split("T")[0];

const CreateCourse = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [hours, setHours] = useState("");
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [date, setDate] = useState(formatDate(Date.now()));
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [instructor, setInstructor] = useState({
    id: 0,
    name: "",
    email: "",
    bio: "",
  });
  const [topics, setTopics] = useState([]);
  const [numberOfStudents, setNumberOfStudents] = useState("");
  const [videos, setVideos] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoDuration, setVideoDuration] = useState("");

  const { mutate, isError, isLoading } = useCustomMutation({
    title: "create course",
    endPoint: "courses",
  });

  const navigate = useNavigate();

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
  };

  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (
      !name ||
      !price ||
      !duration ||
      !hours ||
      !level ||
      !category ||
      !description ||
      !image
    ) {
      alert("Please fill all required fields.");
      return;
    }
    const newCourse = {
      title: name,
      price: parseFloat(price),
      duration: parseFloat(duration),
      hours: parseFloat(hours),
      level,
      category,
      rating: parseFloat(rating) || 0, // Default to 0 if no rating is provided
      date,
      description,
      image,
      instructor,
      topics: topics.map((topic) => topic.trim()).filter((topic) => topic), // Remove empty topics
      numberOfStudents: parseInt(numberOfStudents, 10) || 0, // Default to 0 if no number of students is provided
      videos: videos.sort((a, b) => a.title.localeCompare(b.title)),
    };
    mutate(newCourse, {
      onSuccess: () => {
        alert("Course created successfully!");
        navigate("/dashboard/all-courses");
      },
      onError: (error) => {
        console.error("Error creating course:", error);
        alert("Failed to create course. Please try again.");
      },
    });
  };

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="p-5 rounded-lg">
      <h1 className="text-3xl font-bold mb-10">Create Course</h1>

      <form onSubmit={handleCreateCourse} className="flex flex-col gap-5">
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
        {/* Videos */}
        <SubVideo
          setVideoTitle={setVideoTitle}
          setVideoUrl={setVideoUrl}
          setVideoDuration={setVideoDuration}
          handleAddVideo={handleAddVideo}
          handleDeleteVideo={handleDeleteVideo}
          videoTitle={videoTitle}
          videoUrl={videoUrl}
          videoDuration={videoDuration}
          videos={videos}
        />

        <button
          type="submit"
          className="py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create Course
        </button>
      </form>
    </section>
  );
};

export default CreateCourse;

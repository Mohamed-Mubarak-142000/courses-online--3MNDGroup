import React from "react";
import Card from "./Card";
import useFetching from "../hooks/useFetching";
import CardSkeleton from "../common/CardSkeleton";
import Error from "../common/Error";

const AllBlogs = () => {
  const { data, isLoading, error } = useFetching({
    title: "Courses By Date",
    endPoint: "courses",
  });

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (error) {
    return <Error />;
  }

  //filter data by date more than today style date 2024-08-20
  const coursesByDate = data?.data?.filter(
    (course) => new Date(course.date) > new Date()
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-10 gap-4">
      {coursesByDate?.map((item) => (
        <Card key={item.id} course={item} />
      ))}
    </div>
  );
};

export default AllBlogs;

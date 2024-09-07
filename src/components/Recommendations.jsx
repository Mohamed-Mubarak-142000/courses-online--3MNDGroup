import React, { useState } from "react";
import useFetching from "../hooks/useFetching";
import CardSkeleton from "../common/CardSkeleton";
import Error from "../common/Error";
import SelectInput from "../common/SelectInput";
import { Button } from "@mui/material";
import Card from "../common/Card";
import { Link } from "react-router-dom";
const Recommendations = () => {
  const [category, setCategory] = useState("Category");
  const { data, isLoading, error, refetch } = useFetching({
    title: "Course Recommendations For you",
    endPoint: "courses",
  });

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (error) {
    return <Error />;
  }

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-10 gap-4">
        <h2 className="text-lg lg:text-3xl font-semibold text-text_dark ">
          Course Recommendations For You.!
        </h2>

        <div className="flex justify-end gap-5 items-center flex-wrap">
          <div className="w-full md:w-2/5">
            <SelectInput
              value={category}
              onChange={handleChangeCategory}
              data={data}
              label="Category"
            />
          </div>

          <Button
            variant="contained"
            sx={{
              color: "black",
              fontWeight: "bold",
              p: 1.5,
              backgroundColor: "#FCD980",
              "&:hover": { backgroundColor: "#e2ba53" },
            }}
            className="w-full md:w-2/5"
          >
            <Link to="/courses">View all Courses</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-10 gap-4">
        {category === "Category" &&
          data?.data.map((item) => <Card key={item.id} course={item} />)}

        {data?.data
          .filter((item) => item.category === category)
          .map((item) => (
            <Card course={item} refetch={refetch} />
          ))}
      </div>
    </section>
  );
};

export default Recommendations;

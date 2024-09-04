import React, { useEffect, useState } from "react";
import useFetching from "./../hooks/useFetching";
import Error from "./../common/Error";
import CardSkeleton from "./../common/CardSkeleton";
import { Helmet } from "react-helmet-async";
import { Grid, TextField } from "@mui/material";
import Card from "../common/Card";
const AllCourses = () => {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError } = useFetching({
    title: "get all courses",
    endPoint: "courses",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (isError) {
    return <Error />;
  }

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredCourses = data?.data?.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Dashboard - All Courses</title>
      </Helmet>
      <section>
        <div className="flex justify-center items-center">
          <TextField
            id="outlined-basic"
            label="Search Courses"
            variant="outlined"
            value={search}
            onChange={handleChangeSearch}
            sx={{
              width: { xs: "90%", md: "40%", lg: "50%" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "gray", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#1C1E53", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1C1E53", // Focused border color
                },
              },
              "& .MuiInputLabel-root": {
                color: "gray",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#1C1E53",
              },
              "& .MuiInputBase-input": {
                color: "#000", // Text color
              },
            }}
          />
        </div>

        {filteredCourses?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses?.map((course) => (
              <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
                <Card course={course} />
              </Grid>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full my-16">
            <h2 className="text-lg lg:text-3xl font-semibold text-text_dark">
              No Course Found for {search}
            </h2>
          </div>
        )}
      </section>
    </>
  );
};

export default AllCourses;

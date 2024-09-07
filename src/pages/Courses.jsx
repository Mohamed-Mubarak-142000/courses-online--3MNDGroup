import React, { useEffect } from "react";
import useFetching from "./../hooks/useFetching";
import CardSkeleton from "./../common/CardSkeleton";
import Error from "./../common/Error";
import { Grid, TextField } from "@mui/material";
import Card from "../common/Card";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  const [search, setSearch] = React.useState("");
  const { data, isLoading, error, refetch } = useFetching({
    title: "Course Recommendations For you",
    endPoint: "courses",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <CardSkeleton />;
  }

  if (error) {
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
        <title>All Courses</title>
      </Helmet>
      <section className="my-28">
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-10 gap-4">
            {filteredCourses?.map((course) => (
              <Grid key={course.id} item xs={12} sm={6} md={4} lg={3}>
                <Card course={course} refetch={refetch} />
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

export default Courses;

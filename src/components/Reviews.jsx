import React, { useMemo } from "react";
import useFetching from "../hooks/useFetching";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import Error from "../common/Error";
import imagePerson from "../images/about.png";

const Reviews = ({ courseId }) => {
  const { data, error, isLoading } = useFetching({
    title: "Reviews",
    endPoint: "reviews",
  });

  // Memoize the course reviews based on courseId
  const courseReviews = useMemo(() => {
    const course = data?.data?.find((course) => course.courseId === +courseId);
    return course?.reviews || [];
  }, [data, courseId]);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-28">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Grid container>
      <Grid
        item={true}
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <h2 className="text-lg lg:text-3xl font-semibold text-text_dark">
          Reviews
        </h2>

        <div>
          {courseReviews.length ? (
            courseReviews.map((review) => (
              <Box
                key={review.reviewId}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={imagePerson}
                  alt={review.studentName}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                />
                <div>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {review.studentName}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#282938" }}>
                    {review.comment}
                  </Typography>
                </div>
              </Box>
            ))
          ) : (
            <Typography>No reviews available</Typography>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default Reviews;

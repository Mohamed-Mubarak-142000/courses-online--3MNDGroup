import React, { Fragment, useContext } from "react";
import { ApiContext } from "./../store/ApiContext";
import { Link } from "react-router-dom";
import { Button, Grid, Rating, Typography } from "@mui/material";
import EditProfile from "../components/EditProfile";

const Profile = () => {
  const { user } = useContext(ApiContext);
  return (
    <section className="my-24 px-5 lg:px-20 flex items-start justify-between flex-wrap-reverse lg:flex-wrap gap-3">
      {/* Display purchased products */}
      <section className="lg:w-[70%]">
        {user?.products?.length > 0 ? (
          <Grid container spacing={2}>
            {user?.products?.map((course) => (
              <Fragment key={course.id}>
                <Grid item xs={12} md={6}>
                  <img
                    src={course.image}
                    alt="course"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant="h5"
                    className="font-bold text-text_dark my-1"
                  >
                    {course.title}
                  </Typography>
                  <Typography variant="h6" className="text-gray-500 my-2">
                    Description:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-bold text-text_grey my-2"
                  >
                    {course.description.slice(0, 200)}
                  </Typography>
                  <Typography variant="h6" className="text-gray-500 my-2">
                    Category:
                  </Typography>
                  <Typography
                    variant="body1"
                    className="font-bold text-text_grey my-2"
                  >
                    {course.category}
                  </Typography>
                  <Typography variant="h6" className="text-gray-500 my-2">
                    Price:
                  </Typography>
                  <Typography
                    variant="h5"
                    className="font-bold text-text_grey my-2"
                  >
                    ${course.price}
                  </Typography>

                  <Typography variant="h6" className="text-gray-500 my-2">
                    Rating:
                  </Typography>
                  <Rating value={course.rating} precision={0.5} readOnly />

                  <Link to={`/inroll/${course.id}`}>
                    <Button
                      variant="contained"
                      sx={{
                        my: 1,
                        p: 1.5,
                        fontWeight: "bold",
                        backgroundColor: "#FCD980",
                        color: "#000",
                        boxShadow: "none",
                        "&:hover": {
                          backgroundColor: "#e2ba53",
                          boxShadow: "none",
                        },
                      }}
                      fullWidth
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </Grid>
              </Fragment>
            ))}
          </Grid>
        ) : (
          <h1 className="text-4xl mb-10 text-center text-[#7d7d7d] mt-52">
            Your Cart is Empty.!
          </h1>
        )}
      </section>

      {/* User Information Section */}
      <EditProfile />
    </section>
  );
};

export default Profile;

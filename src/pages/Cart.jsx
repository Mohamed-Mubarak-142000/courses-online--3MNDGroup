import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ApiContext } from "../store/ApiContext";
import { Button, Grid, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useContext(ApiContext);
  return (
    <>
      <Helmet>
        <title>WishList</title>
      </Helmet>
      <section className="container min-h-[100vh] mt-28 ">
        <h1 className="text-3xl font-bold mb-10 text-center text-text_dark capitalize border-b-2 pb-2">
          <span className="text-primary font-bold">your</span> Cart
        </h1>
        {cart?.length > 0 ? (
          <Grid container spacing={2}>
            {cart.map((course) => (
              <>
                {/* <div key={course.id}> */}
                <Grid item={true} xs={12} md={6}>
                  <img
                    src={course.image}
                    alt="course"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </Grid>
                <Grid item={true} xs={12} md={6}>
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
                  {/***removed */}
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      my: 1,
                      p: 1.5,
                      fontWeight: "bold",
                    }}
                    fullWidth
                    onClick={() => removeFromCart(course.id)}
                  >
                    Remove
                  </Button>
                </Grid>
                {/* </div> */}
              </>
            ))}
          </Grid>
        ) : (
          <h1 className="text-4xl mb-10 text-center text-[#7d7d7d] mt-52">
            Your Cart is Empty.!
          </h1>
        )}
      </section>
    </>
  );
};

export default Cart;

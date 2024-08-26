import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Link } from "react-router-dom";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const CourseCard = ({ course }) => {
  const isLogin = false; // Change based on actual login state

  const handleAddToCart = () => {
    if (!isLogin) {
      console.log("Please login to add to cart");
    } else {
      // Add to cart logic here
    }
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: "400px",
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 450,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardMedia
          component="img"
          alt={course.title}
          image={course.image}
          title={course.title}
          loading="lazy"
          sx={{
            height: 180,
            objectFit: "cover",
          }}
        />
        <Link
          to={`/courses/${course.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {course.title}
            </Typography>

            <Typography variant="body2" color="text.secondary" paragraph>
              {course.description}
            </Typography>

            <Typography gutterBottom variant="body2" component="div">
              {course.date}
            </Typography>
          </CardContent>
        </Link>

        {/* Buttons: Add to Cart and Wishlist */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 1 }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: "bold",
              fontSize: "14px",
              border: "1px solid #1976d2", // Match with primary color
            }}
            onClick={handleAddToCart}
          >
            <ShoppingBagIcon />
            Add to Cart
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            size="small"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              borderRadius: "50%",
              minWidth: "40px",
              height: "40px",
              border: "1px solid #f50057", // Match with secondary color
            }}
          >
            <FavoriteBorderOutlinedIcon
              sx={{ color: "#f50057", fontSize: "25px" }} // Match with secondary color
            />
          </Button>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 2 }}
        >
          <Box display="flex" alignItems="center">
            <VideoLibraryIcon sx={{ mr: 1 }} />
            <Typography variant="body2">{course.hours} Hours</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <PeopleIcon sx={{ mr: 1 }} />
            <Typography variant="body2">
              {course.numberOfStudents} Students
            </Typography>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default CourseCard;

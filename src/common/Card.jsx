import React, { useContext, useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import {
  People as PeopleIcon,
  VideoLibrary as VideoLibraryIcon,
  ShoppingCartOutlined,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  Favorite,
  Edit,
} from "@mui/icons-material";
import { ApiContext } from "../store/ApiContext";
import AlertSnackbar from "./AlertSnackbar";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { user, addToWishlist, wishlist, addToCart } = useContext(ApiContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddToCart = () => {
    if (!user) {
      setSnackbarMessage("Please login to add to cart");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }
    addToCart(course); // Use the addToCart function from ApiContext
    setSnackbarMessage("Added to cart successfully!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const isInWishlist = wishlist.some((item) => item.id === course.id);
  const isCarted = user?.products?.some((item) => item.id === course.id);

  const handleAddToWishlist = () => {
    if (!user) {
      setSnackbarMessage("Please login to add to wishlist");
      setSnackbarSeverity("warning");
      setSnackbarOpen(true);
      return;
    }
    if (isInWishlist) {
      addToWishlist(course);
      setSnackbarMessage("Removed from wishlist!");
      setSnackbarSeverity("warning");
    } else {
      addToWishlist(course);
      setSnackbarMessage("Added to wishlist!");
      setSnackbarSeverity("success");
    }
    setSnackbarOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: 450,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Link to={`/courses/${course.id}`}>
          <CardMedia
            component="img"
            alt={course.title}
            image={course.image}
            loading="lazy"
            sx={{ height: 200, objectFit: "cover" }}
          />
        </Link>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Link
              to={`/courses/${course.id}`}
              style={{ textDecoration: "none" }}
            >
              <Typography variant="h6" component="div" noWrap>
                {course.title}
              </Typography>
            </Link>
            {user.role === "user" && (
              <IconButton
                aria-label="add to wishlist"
                onClick={handleAddToWishlist}
                sx={{
                  color: "secondary.main",
                  "&:hover": { color: "secondary.dark" },
                }}
              >
                {isInWishlist ? (
                  <Favorite sx={{ fontSize: 25 }} />
                ) : (
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: 25 }} />
                )}
              </IconButton>
            )}
          </Box>

          <Typography variant="body2" color="text.secondary" paragraph noWrap>
            {course.description}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {course.date}
          </Typography>
        </CardContent>

        <Link to={`/courses/${course.id}`}>
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
        </Link>

        {user.role === "user" ? (
          isCarted ? (
            <Link
              to={`/inroll/${course.id}`}
              className="bg-primary text-text_dark font-semibold p-[10px] rounded mb-4 w-[90%] mx-auto text-center"
            >
              Enroll Now
            </Link>
          ) : (
            <Button
              variant="contained"
              color="warning"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontWeight: "bold",
                fontSize: 14,
                width: "90%",
                mx: "auto",
                mb: 2,
                padding: "10px",
                borderTop: "1px solid",
                borderColor: "warning.light",
                borderRadius: "5px",
              }}
              onClick={handleAddToCart}
            >
              <ShoppingCartOutlined />
              Add to Cart
            </Button>
          )
        ) : (
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: "bold",
              fontSize: 14,
              width: "90%",
              mx: "auto",
              mb: 2,
              padding: "10px",
              borderTop: "1px solid",
              borderRadius: "5px",
            }}
          >
            <Edit />
            Edit Course
          </Button>
        )}
      </Card>

      <AlertSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        onClose={handleSnackbarClose}
        severity={snackbarSeverity}
      />
    </>
  );
};

export default CourseCard;

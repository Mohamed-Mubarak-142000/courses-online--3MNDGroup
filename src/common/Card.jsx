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
  Delete,
} from "@mui/icons-material";
import { ApiContext } from "../store/ApiContext";
import AlertSnackbar from "./AlertSnackbar";
import { Link } from "react-router-dom";
import useDeleteCourse from "../hooks/useDeleteCourse";
import CustomModal from "../components/CustomModal"; // Import your Modal

const CourseCard = ({ course, refetch }) => {
  const { user, addToWishlist, wishlist, addToCart } = useContext(ApiContext);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalAction, setModalAction] = useState(() => {});
  const { mutate: deleteCourse } = useDeleteCourse();

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
    addToCart(course);
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
    addToWishlist(course);
    setSnackbarMessage(
      isInWishlist ? "Removed from wishlist!" : "Added to wishlist!"
    );
    setSnackbarSeverity(isInWishlist ? "warning" : "success");
    setSnackbarOpen(true);
  };

  const handleDeleteCourse = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      deleteCourse(course.id);
      refetch();
    }
  };

  const handleEditCourse = () => {
    setModalOpen(true);
    setModalTitle("Edit Course");
    setModalContent("Edit course functionality is under construction.");
    setModalAction(() => () => {
      setModalOpen(false);
    });
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
          minHeight: 500,
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
                {course.title.slice(0, 25)}
              </Typography>
            </Link>
            {user?.role !== "admin" && (
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
        {user?.role !== "admin" ? (
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
          <>
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
                mb: 1,
                padding: "10px",
                borderTop: "1px solid",
                borderRadius: "5px",
              }}
              onClick={handleEditCourse}
            >
              Edit Course
              <Edit />
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                gap: 1,
                fontWeight: "bold",
                fontSize: 14,
                width: "90%",
                mx: "auto",
                padding: "10px",
                borderTop: "1px solid",
                borderRadius: "5px",
              }}
              onClick={handleDeleteCourse}
            >
              Delete Course
              <Delete />
            </Button>
          </>
        )}
      </Card>

      {/* Modal */}
      <CustomModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        title={modalTitle}
        content={modalContent}
        onConfirm={modalAction}
        course={course}
      />

      {/* Snackbar */}
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

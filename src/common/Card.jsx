import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card
        sx={{
          maxWidth: 345,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: 450,
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
    </Link>
  );
};

export default CourseCard;

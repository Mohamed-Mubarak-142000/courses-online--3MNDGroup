import React, { memo } from "react";
import { Box, Button, Grid, Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Chips from "./Chips";
import imageInstructor from "../images/about.png";
import {
  People as PeopleIcon,
  VideoLibrary as VideoLibraryIcon,
  CalendarMonth as CalendarMonthIcon,
  WatchLater as WatchLaterIcon,
  BarChart as BarChartIcon,
  OndemandVideo as OndemandVideoIcon,
} from "@mui/icons-material";

const DetailRow = memo(({ icon: Icon, label }) => (
  <Box display="flex" alignItems="center">
    <Icon sx={{ mr: 1 }} />
    <Typography variant="body2">{label}</Typography>
  </Box>
));

const InformationDetailsCourse = ({ data }) => {
  return (
    <Grid item={true} xs={12} md={6}>
      <Typography variant="h4" className="font-bold text-text_dark my-1">
        {data.title}
      </Typography>
      <Typography variant="h6" className="text-gray-500 my-2">
        Description:
      </Typography>
      <Typography variant="body1" className="font-bold text-text_grey my-2">
        {data.description.slice(0, 200)}
      </Typography>
      <Typography variant="h6" className="text-gray-500 my-2">
        Category:
      </Typography>
      <Typography variant="body1" className="font-bold text-text_grey my-2">
        {data.category}
      </Typography>
      <Typography variant="h6" className="text-gray-500 my-2">
        Price:
      </Typography>
      <Typography variant="h5" className="font-bold text-text_grey my-2">
        ${data.price}
      </Typography>

      <Typography variant="h6" className="text-gray-500 my-2">
        Rating:
      </Typography>
      <Rating value={data.rating} precision={0.5} readOnly />

      <Box display="flex" alignItems="center" gap={1} my={2}>
        <img
          src={imageInstructor}
          alt="Instructor"
          className="w-10 h-10 rounded-full"
        />
        <Typography variant="body2" className="ml-2 font-bold">
          {data.instructor?.name}
        </Typography>
      </Box>

      <Typography variant="body2" className="ml-2">
        {data.instructor?.bio}
      </Typography>

      <Box
        sx={{
          p: 2,
          flexWrap: "wrap",
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <DetailRow icon={WatchLaterIcon} label={data?.duration} />
        <DetailRow icon={BarChartIcon} label={`${data?.level} level`} />
        <DetailRow
          icon={OndemandVideoIcon}
          label={`${data?.videos?.length} videos`}
        />
        <DetailRow icon={VideoLibraryIcon} label={`${data?.hours} Hours`} />
        <DetailRow icon={CalendarMonthIcon} label={`${data?.date} started`} />
        <DetailRow
          icon={PeopleIcon}
          label={`${data?.numberOfStudents} Students`}
        />
      </Box>

      <Chips data={data?.data} />

      <Link to={`/inroll/${data.id}`}>
        <Button
          variant="contained"
          sx={{
            my: 2,
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
  );
};

export default memo(InformationDetailsCourse);

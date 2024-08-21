import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";
import Error from "../common/Error";
import { CircularProgress, Grid } from "@mui/material";
import InformationDetailsCourse from "../components/InformationDetailsCourse";
import Recommendations from "./../components/Recommendations";
import TabsSection from "../components/TabsSection";

const DetailsCourse = () => {
  const { courseId } = useParams();
  const { data, error, isLoading, refetch } = useFetching({
    title: "Courses By ID",
    endPoint: `courses/${courseId}`,
  });

  // top scroll 0
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    refetch();
  }, [courseId]);

  const image = data?.data?.image;
  const imageMemo = useMemo(() => image, [image]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-28">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="my-28 mx-2 lg:mx-12">
      {/** Details section */}
      <Grid container spacing={2}>
        <Grid item={true} xs={12} md={6}>
          <img
            src={imageMemo}
            alt="course"
            className="w-full h-full object-cover rounded-3xl"
          />
        </Grid>
        {data?.data && <InformationDetailsCourse data={data.data} />}
      </Grid>

      {/** Tabs section */}
      <TabsSection data={data} courseId={courseId} />

      {/** Recommendations section */}
      <Recommendations />
    </section>
  );
};

export default DetailsCourse;

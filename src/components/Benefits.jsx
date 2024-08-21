import { Grid, Typography } from "@mui/material";
import React from "react";
import StylingNumber from "./StylingNumber";

const Benefits = () => {
  const data = [
    {
      id: "1",
      title: "Free Courses",
      description:
        "We provide several free courses to support the availability of education for underprivileged communities",
    },
    {
      id: "2",
      title: "Access Forever",
      description:
        "All courses that you have registered can be accessed forever so that your learning is more comfortable and not rushed",
    },
    {
      id: "3",
      title: "Consulting Group",
      description:
        "There is a consultation group which is useful if you want to ask a question and you can also open a new discussion",
    },
    {
      id: "4",
      title: "Certificates and Portfolios",
      description:
        "After completing the course you will get a certificate and a portfolio of completed course projects",
    },
    {
      id: "5",
      title: "More Directed Learning",
      description:
        "The course provides courses from basic to expert level so that everyone can learn with the services we provide",
    },
    {
      id: "6",
      title: "Experienced Instructor",
      description:
        "We have experienced instructors drawn from the industrial world whose experience is beyond doubt",
    },
  ];

  return (
    <section className="  min-h-[30vh] my-5">
      <div className="w-[90%] md:w-[70%] lg:w-[50%] xl:w-[30%] mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold text-text_dark">
          Benefits of Joining{" "}
          <span className="text-primary uppercase">coursatak</span> E-Learning
        </h2>
      </div>

      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {data.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            md={6}
            lg={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "10px",
              p: 2,
              color: "black",
              height: "250px",
              backgroundColor: "#EEF4FA",
            }}
          >
            <StylingNumber number={item.id} />

            <Typography
              variant="h5"
              className="text-xl md:text-2xl font-bold text-text_dark mb-2"
            >
              {item.title}
            </Typography>

            <Typography
              variant="body1"
              className="text-sm md:text-base text-text_dark"
            >
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Benefits;

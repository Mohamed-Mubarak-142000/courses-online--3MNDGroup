import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      title: "CEO at TechCorp",
      image: "/person.png",
      message:
        "This service is outstanding! It has exceeded my expectations in every way.",
      date: "2024-08-01",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      title: "Marketing Director at BizWorld",
      image: "/person.png",
      message:
        "I am extremely satisfied with the product. The team is very responsive and helpful.",
      date: "2024-07-15",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Michael Brown",
      title: "Freelance Designer",
      image: "/person.png",
      message:
        "A wonderful experience from start to finish. I highly recommend it to everyone.",
      date: "2024-08-10",
      rating: 5,
    },
    {
      id: 4,
      name: "Emily White",
      title: "Product Manager at Innovatech",
      image: "/person.png",
      message:
        "Top-notch quality and excellent customer service. I will definitely return.",
      date: "2024-08-05",
      rating: 4.8,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-bg_block my-10 py-7 ">
      <div className="container lg:w-[80%] xl:w-[60%]">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="slider-item p-5">
              {" "}
              {/**image by material ui */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </Box>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                {item.name}
              </Typography>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                {item.title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {item.message}
              </Typography>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

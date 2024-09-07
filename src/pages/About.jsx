import React, { useEffect } from "react";
import { Container, Typography, Button, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Container maxWidth="lg" className="py-10 mt-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <Typography variant="h3" component="h1" className="mb-6 font-bold">
            About Us
          </Typography>
          <Typography variant="h6" className="mb-8 text-gray-700">
            Welcome to{" "}
            <span className="text-primary uppercase font-bold">coursatak</span>{" "}
            E-Learning We are committed to delivering top-quality online courses
            designed to enhance your skills and knowledge. Our mission is to
            empower learners worldwide by providing accessible, affordable, and
            comprehensive educational content.
          </Typography>
          <Link to="/courses">
            <Button
              variant="outlined"
              color="primary"
              sx={{ mt: 4, fontSize: "1.2rem" }}
            >
              Explore Our Courses
            </Button>
          </Link>
        </motion.div>

        {/* Mission, Vision, and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-6 shadow-lg rounded-lg"
          >
            <Typography variant="h5" className="mb-4 font-semibold">
              Our Mission
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Our mission is to democratize education by providing high-quality
              online courses accessible to everyone. We are dedicated to
              fostering a community of learners who are empowered to achieve
              their personal and professional goals.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-6 shadow-lg rounded-lg"
          >
            <Typography variant="h5" className="mb-4 font-semibold">
              Our Vision
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              We envision a world where quality education is accessible to all,
              regardless of location or financial status. Our platform aims to
              bridge the gap between traditional education and the future of
              online learning.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-6 shadow-lg rounded-lg"
          >
            <Typography variant="h5" className="mb-4 font-semibold">
              Why Choose Us?
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              We offer courses crafted by industry experts, designed to cater to
              learners of all levels. With a flexible, self-paced format, you
              can learn at your own convenience. Join us to unlock your
              potential and transform your career.
            </Typography>
          </motion.div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <Typography variant="h4" className="text-center mb-10 font-bold">
            Meet Our Team
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center p-6 shadow-lg rounded-lg"
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <Typography variant="h6" className="font-semibold">
                  {member.name}
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                  {member.role}
                </Typography>
                <Typography variant="body2" className="mt-2 text-gray-600">
                  {member.bio}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

// Example data for team members
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/002/002/257/small/beautiful-woman-avatar-character-icon-free-vector.jpg",
    bio: "John is a visionary leader with a passion for education and technology. He founded this platform to make learning accessible to everyone.",
  },
  {
    name: "Jane Smith",
    role: "Chief Technology Officer",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724457600&semt=ais_hybrid",
    bio: "Jane is the tech genius behind our platform. She ensures that everything runs smoothly and that our users have a seamless experience.",
  },
  {
    name: "Emily Johnson",
    role: "Head of Content",
    image:
      "https://st3.depositphotos.com/3431221/13621/v/450/depositphotos_136216036-stock-illustration-man-avatar-icon-hipster-character.jpg",
    bio: "Emily curates and creates high-quality content for our courses. She is dedicated to providing learners with the best educational resources.",
  },
  {
    name: "Michael Brown",
    role: "Marketing Director",
    image:
      "https://www.creativefabrica.com/wp-content/uploads/2023/01/30/Bearded-Man-Avatar-Icon-Graphics-59392089-1.jpg",
    bio: "Michael is the driving force behind our marketing strategies. He ensures that our message reaches the right audience and that our brand continues to grow.",
  },
];

export default About;

import React, { useContext, useEffect, useState } from "react";
import Loading from "../common/Loading";
import Hero from "../components/Hero";
import Statistic from "../components/Statistic";
import Benefits from "../components/Benefits";
import About from "../components/About";
import Recommendations from "../components/Recommendations";
import Testimonials from "../components/Testimonials";
import Frequantly from "../components/Frequantly";
import Register from "./../auth/Register";
import Blog from "../components/Blog";
import { Helmet } from "react-helmet-async";
import { ApiContext } from "../store/ApiContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(ApiContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      console.log(user);
    }
  }, [user, navigate]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Hero />
      <Statistic />
      <Benefits />
      <About />
      <Recommendations />
      <Testimonials />
      <Frequantly />
      <section className="container">
        <Register />
      </section>
      <Blog />
    </>
  );
};

export default Home;

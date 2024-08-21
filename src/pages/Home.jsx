import React, { useEffect, useState } from "react";
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
const Home = () => {
  //LOADING before rendering
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
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

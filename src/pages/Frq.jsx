import React, { useEffect } from "react";
import Frequantlys from "../common/Frequantlys";
import { Helmet } from "react-helmet-async";

const Frq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions</title>
      </Helmet>
      <section className="container min-h-[100vh] mt-28">
        <h1 className="text-3xl font-bold mb-10">Frequently Asked Questions</h1>
        <Frequantlys />
      </section>
    </>
  );
};

export default Frq;

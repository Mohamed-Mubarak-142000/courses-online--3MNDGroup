import React, { useEffect } from "react";
import Frequantlys from "../common/Frequantlys";

const Frq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <section className="container min-h-[100vh] mt-28">
      <h1 className="text-3xl font-bold mb-10">Frequently Asked Questions</h1>
      <Frequantlys />
    </section>
  );
};

export default Frq;

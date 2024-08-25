import React, { useEffect } from "react";
import AllBlogs from "./../common/AllBlogs";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Helmet>
        <title>Blog </title>
      </Helmet>
      <section className="mx-2 lg:mx-12 min-h-[100vh] mt-28 ">
        <AllBlogs />
      </section>
    </>
  );
};

export default Blogs;

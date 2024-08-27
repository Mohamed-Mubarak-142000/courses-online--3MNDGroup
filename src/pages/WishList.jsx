import React, { useContext, useEffect } from "react";
import { ApiContext } from "../store/ApiContext";
import Card from "../common/Card";
import { Helmet } from "react-helmet-async";

const WishList = () => {
  const { wishlist } = useContext(ApiContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>WishList</title>
      </Helmet>
      <section className="container min-h-[100vh] mt-28 ">
        <h1 className="text-3xl font-bold mb-10 text-center text-text_dark capitalize border-b-2 pb-2">
          <span className="text-primary font-bold">your</span> wishlist
        </h1>
        {wishlist?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {wishlist.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <h1 className="text-4xl mb-10 text-center text-[#7d7d7d] mt-52">
            Your wishList is Empty.!
          </h1>
        )}
      </section>
    </>
  );
};

export default WishList;

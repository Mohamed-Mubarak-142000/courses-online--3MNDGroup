import React, { useEffect, useState } from "react";
import Loading from "../common/Loading";
const Home = () => {
  //LOADING before rendering
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return <div>Home</div>;
};

export default Home;

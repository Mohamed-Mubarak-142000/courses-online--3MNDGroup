import { Button } from "@mui/material";
import Blogs from "../common/AllBlogs";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-10 gap-4">
        <h2 className="text-lg lg:text-3xl font-semibold text-text_dark ">
          Blog, News and Events.!{" "}
        </h2>

        <div className="flex justify-end gap-5 items-center flex-wrap">
          <Button
            variant="contained"
            sx={{
              color: "black",
              fontWeight: "bold",
              p: 1.5,
              backgroundColor: "#FCD980",
              "&:hover": { backgroundColor: "#e2ba53" },
            }}
            className="w-full md:w-2/5"
          >
            <Link to="/blog">View all Blogs</Link>
          </Button>
        </div>
      </div>
      <Blogs />
    </section>
  );
};

export default Blog;

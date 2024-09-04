import { List } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SlideBar from "../admin/SlideBar";
import { ApiContext } from "./../store/ApiContext";

const Dashboard = () => {
  const { user } = useContext(ApiContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== "admin") {
      navigate("/");
    }
  }, [user?.role, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="w-full  lg:w-[80%] mx-auto my-36 flex items-center lg:items-start justify-between">
      {/* Sidebar Toggle Button */}
      <List
        onClick={handleOpen}
        sx={{
          fontSize: 30,
          cursor: "pointer",
          position: "fixed",
          zIndex: 50,
          top: 90,
          left: 20,
          width: 50,
          height: 50,
          borderRadius: "50%",
          color: "#fff",
          border: "1px solid #fff",
          padding: 1,
          bgcolor: "#1C1E53",
        }}
      />
      <SlideBar open={open} />

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          open ? "w-[73%]" : "w-full"
        } ml-auto bg-white p-5 shadow-md rounded-lg overflow-y-auto h-[100vh]`}
      >
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;

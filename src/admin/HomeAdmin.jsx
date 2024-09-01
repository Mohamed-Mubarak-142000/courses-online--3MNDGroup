import React from "react";
import CoursesChart from "./CoursesChart";
import useFetching from "../hooks/useFetching";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
const HomeAdmin = () => {
  const { data } = useFetching({
    title: "get all courses",
    endPoint: "courses",
  });

  const { data: dataUser } = useFetching({
    title: "get all users",
    endPoint: "users",
  });

  return (
    <section>
      <div className="flex justify-center flex-wrap gap-5 items-center">
        <div className="w-full lg:w-[300px] h-[250px] flex flex-col items-center justify-center text-3xl border lg:p-5 rounded-md text-center bg-primary">
          <SchoolIcon sx={{ fontSize: "60px" }} />
          <h1>Courses Online</h1>
          <h2>+{data?.data?.length}</h2>
        </div>

        <div className="w-full lg:w-[300px] h-[250px] flex flex-col items-center justify-center text-3xl border lg:p-5 rounded-md text-center bg-primary">
          <GroupsIcon sx={{ fontSize: "60px" }} />
          <h1>User Register</h1>
          <h2>+{dataUser?.data?.length}</h2>
        </div>
      </div>
      <CoursesChart />
    </section>
  );
};

export default HomeAdmin;

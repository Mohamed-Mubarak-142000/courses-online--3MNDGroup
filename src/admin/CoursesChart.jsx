import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Box } from "@mui/material";
import useFetching from "../hooks/useFetching";

const CoursesChart = () => {
  const [coursesData, setCoursesData] = useState([]);
  const { data, isLoading } = useFetching({
    title: "get all courses",
    endPoint: "courses",
  });

  useEffect(() => {
    if (data?.data) {
      const formattedData = data.data.map((course) => ({
        name: course.title,
        students: Number(course.numberOfStudents),
      }));
      setCoursesData(formattedData);
    }
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!coursesData.length) {
    return <h1>No data available</h1>;
  }

  return (
    <section className="my-20">
      <Box sx={{ width: "100%", height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={coursesData}
            width={"100%"}
            // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </section>
  );
};

export default CoursesChart;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import DetialsCourse from "./pages/DetialsCourse";
import { QueryClient, QueryClientProvider } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import Login from "./auth/Login";
import Register from "./auth/Register";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApiContextProvider from "./store/ApiContext";
import Blogs from "./pages/Blogs";
import Frq from "./pages/Frq";
import Inroll from "./pages/Inroll";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import HomeAdmin from "./admin/HomeAdmin";
import AllUsers from "./admin/AllUsers";
import AllCourses from "./admin/AllCourses";
import CreateCourse from "./admin/CreateCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/courses", element: <Courses /> },
      { path: "/blog", element: <Blogs /> },
      { path: "/frq", element: <Frq /> },
      { path: "/wishList", element: <WishList /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/dashboard/",
        element: <Dashboard />,
        children: [
          { index: true, element: <HomeAdmin /> },
          { path: "home-admin", element: <HomeAdmin /> },
          { path: "all-users", element: <AllUsers /> },
          { path: "all-courses", element: <AllCourses /> },
          { path: "create-course", element: <CreateCourse /> },
        ],
      },
      { path: "/profile", element: <Profile /> },
      {
        path: "/courses/:courseId",
        element: <DetialsCourse />,
      },
    ],
  },
  { path: "/inroll/:courseId", element: <Inroll /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <div>Not Found</div> },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiContextProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </ApiContextProvider>
  </React.StrictMode>
);

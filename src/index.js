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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:courseId", element: <DetialsCourse /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <div>Not Found</div> },
]);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

import React from "react";
import { NavLink } from "react-router-dom";

const SlideBar = ({ open }) => {
  return (
    <ul
      className={`${
        open
          ? "lg:w-[25%] opacity-100 lg:visibility-visible"
          : "w-0 opacity-0 visibility-hidden"
      } transition-all duration-300 flex flex-col gap-5 items-center justify-center py-3 bg-secondary rounded-xl shadow-lg text-white overflow-hidden lg:h-[600px]`}
    >
      {["home-admin", "all-courses", "all-users", "create-course"].map(
        (path, index) => (
          <li
            key={index}
            className="w-[90%] mx-auto text-white text-center p-3 hover:bg-primary hover:text-text_dark rounded-lg cursor-pointer transition-all duration-100"
          >
            <NavLink to={`/dashboard/${path}`} className="block w-full">
              {path
                .replace("-", " ")
                .replace(/(^|\s)\S/g, (t) => t.toUpperCase())}
            </NavLink>
          </li>
        )
      )}
    </ul>
  );
};

export default SlideBar;

import React, { useContext, useState, useEffect } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ApiContext } from "../store/ApiContext";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, userLogout } = useContext(ApiContext);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    userLogout();
    navigate("/login");
    handleMenuClose();
  };

  const handleDashboard = () => {
    navigate("/dashboard");
    handleMenuClose();
  };

  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/courses", title: "Courses" },
    { path: "/blog", title: "Blog" },
    { path: "/frq", title: "FAQ" },
  ];

  return (
    <header className={`header ${isScrolled ? "move" : ""}`}>
      <h2
        className="first-letter:text-7xl align-text-top font-bold text-primary cursor-pointer select-none"
        onClick={() => navigate("/")}
      >
        C
        <span className="text-3xl text-white relative -left-4 -top-4">
          oursatak
        </span>
      </h2>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-white"
      >
        <ReorderIcon
          className={`transition-all duration-300 ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
          fontSize="large"
        />
      </button>

      <nav
        className={`flex justify-center items-center gap-5 text-capitalize md:flex-row flex-col md:static transition-all duration-500 fixed 
        inset-0 top-20 ${
          isMenuOpen ? "h-80" : "h-0"
        } md:h-auto overflow-hidden bg-primary md:bg-transparent shadow-2xl md:shadow-none`}
      >
        {Links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-base text-text_dark md:text-white px-5 py-px"
          >
            {link.title}
          </NavLink>
        ))}

        {user ? (
          <div>
            <Avatar
              sx={{ bgcolor: deepOrange[500], cursor: "pointer" }}
              onClick={handleMenuOpen}
            >
              {user?.username?.charAt(0).toUpperCase()}
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: "200px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                },
              }}
            >
              <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            to="/login"
            className="w-1/3 md:w-2/5 border py-3 px-4 text-base text-white bg-secondary md:text-text_dark font-bold rounded-lg md:bg-primary text-center"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}

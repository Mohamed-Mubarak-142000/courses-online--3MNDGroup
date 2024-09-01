import React, { useContext, useState, useEffect } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ApiContext } from "../store/ApiContext";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import {
  Logout,
  Person2Rounded,
  FavoriteOutlined,
  Dashboard,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, userLogout, wishlist, cart } = useContext(ApiContext);
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
    navigate("/");
    handleMenuClose();
  };

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/courses", title: "Courses" },
    { path: "/blog", title: "Blog" },
    { path: "/frq", title: "FAQ" },
  ];

  return (
    <header className={`header ${isScrolled ? "move" : ""}`}>
      <h2
        className="first-letter:text-7xl font-bold text-primary cursor-pointer select-none"
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
        {navLinks.map(({ path, title }) => (
          <NavLink
            key={path}
            to={path}
            onClick={() => setIsMenuOpen(false)}
            className="text-base text-text_dark md:text-white px-5 py-px"
          >
            {title}
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
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleMenuClose();
                }}
              >
                <Person2Rounded sx={{ mr: 1 }} />
                {user?.username || user?.email}
              </MenuItem>

              {user.role === "admin" && (
                <MenuItem
                  onClick={() => {
                    navigate("/dashboard");
                    handleMenuClose();
                  }}
                >
                  <Dashboard sx={{ mr: 1 }} />
                  Dashboard
                </MenuItem>
              )}

              <MenuItem
                onClick={() => {
                  navigate("/cart");
                  handleMenuClose();
                }}
                sx={{ position: "relative" }}
              >
                <ShoppingCartOutlined sx={{ mr: 1 }} />
                Cart
                <div className="absolute top-[-7px] left-8 w-6 h-6 bg-secondary text-bg_block text-center rounded-full">
                  {cart.length}
                </div>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  navigate("/wishlist");
                  handleMenuClose();
                }}
                sx={{ position: "relative" }}
              >
                <FavoriteOutlined sx={{ mr: 1 }} />
                Wish List
                <div className="absolute top-[-7px] left-8 w-6 h-6 bg-secondary text-bg_block text-center rounded-full">
                  {wishlist.length}
                </div>
              </MenuItem>

              <MenuItem onClick={handleLogout}>
                <Logout sx={{ mr: 1 }} />
                Logout
              </MenuItem>
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

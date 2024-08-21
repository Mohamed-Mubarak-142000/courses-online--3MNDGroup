import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/courses", title: "Courses" },
    { path: "/blog", title: "Blog" },
    { path: "/frq", title: "Frq" },
  ];

  return (
    <header className={`header ${isScrolled && "move"}`}>
      <h2
        className={`first-letter:text-7xl align-text-top  font-bold text-primary cursor-pointer select-none`}
        onClick={() => navigate("/")}
      >
        C
        <span className="text-3xl text-white relative -left-4 -top-4">
          oursatak
        </span>
      </h2>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="m-0 md:hidden text-white"
      >
        <ReorderIcon
          className={`${
            isMenuOpen ? "rotate-90" : "rotate-0"
          } transition-all duration-300 `}
          size={"2rem"}
          fill="white"
          color="white"
          fontWeight={900}
        />
      </button>

      <nav
        className={`flex justify-center items-center gap-5 text-capitalize md:flex-row flex-col md:static transition-all duration-500 fixed 
      inset-0 top-20 ${
        isMenuOpen ? "h-64" : "h-0"
      } md:h-auto overflow-hidden bg-primary md:bg-transparent shadow-2xl md:shadow-none`}
      >
        {Links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className={` text-base text-text_dark md:text-white px-5 py-px `}
          >
            {link.title}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

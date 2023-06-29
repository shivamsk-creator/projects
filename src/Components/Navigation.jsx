import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import logo2 from "../assets/images/logo2.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const [page, setPage] = useState("");

  useEffect(() => {
    setPage(location.pathname.startsWith("/"));
  }, [location.pathname]);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="medium"
        color={page ? "white" : "black"}
        className="p-1 font-normal hover:text-[var(--theme-color)] transition"
      >
        <a href="#" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-normal hover:text-[var(--theme-color)] transition"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-normal hover:text-[var(--theme-color)] transition"
      >
        <a href="#" className="flex items-center">
          Courses
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-normal hover:text-[var(--theme-color)] transition"
      >
        <a href="#" className="flex items-center">
          Blogs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="medium"
        color="white"
        className="p-1 font-normal hover:text-[var(--theme-color)] transition"
      >
        <a href="#" className="flex items-center">
          Contact
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar
        className={
          scrolled
            ? " bg-[#00000040] backdrop-blur-lg sticky inset-0 z-30 h-[15vh] max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-3"
            : " sticky inset-0 z-30 h-[15vh] max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-3"
        }
        shadow={false}
        color={scrolled ? "" : "transparent"}
        blurred={true}
      >
        <div className="flex items-center justify-between  text-white">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo2} alt="" className="mx-3 h-16 w-16 rounded-full" />
            <Link to="/" className="py-1.5">
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer text-4xl"
              >
                S<span className="text-[var(--theme-color)]">M</span>S
              </Typography>
              <span>EDUCATION</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
              onClick={() => {
                navigate("/login-student");
              }}
            >
              <span>Login / Register</span>
            </Button>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login/Register</span>
          </Button>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navigation;

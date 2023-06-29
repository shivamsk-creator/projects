import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "../assets/styles/adminSidebar.css";
import AdminHeader from "./AdminHeader";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const AdminSidebar = ({ children, updateAdminAuth, adminAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  let justify = { justifyContent: isOpen ? "start" : "center" };

  return (
    <div className="flex">
      <div
        style={{
          width: isOpen ? "200px" : "70px",
        }}
        className="absolute top-0 left-0 z-20 sm:static h-screen bg-white text-[#6e82a5] transition-all duration-300 overflow-y-scroll scrollbar-hide box-content"
      >
        <div
          className="flex items-center  py-4 text-2xl h-16"
          style={{ justifyContent: isOpen ? "between" : "center" }}
        >
          <Link to="/">
            <h1
              style={{ display: isOpen ? "block" : "none" }}
              className="text-4xl"
            >
              S<span className="text-[var(--theme-color)]">M</span>S
            </h1>
          </Link>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className=" cursor-pointer"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {/* Dashboard */}
        <NavLink
          to="/admin/dashboard"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Dashboard
          </div>
        </NavLink>
        {/* Enquiries */}
        <NavLink
          to="/admin/enquiries"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Enquiries
          </div>
        </NavLink>
        {/* Orders */}
        <NavLink
          to="/admin/orders"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Orders
          </div>
        </NavLink>
        {/* Courses */}
        <Accordion open={open === 1} className="my-0">
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className="shadow-none border-none py-0 my-0"
          >
            <div
              className="flex items-center font-semibold w-full py-1 my-1 px-1.5 text-lg text-[#6e82a5] transition-all hover:text-[var(--theme-color)] hover:transition-all"
              activeclassName="active"
            >
              <div className=" px-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <div
                style={{ display: isOpen ? "flex" : "none" }}
                className="ml-2"
              >
                <div>Courses</div>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform mt-1.5 mx-2 ${
                    open && open === 1 ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="py-0 text-md">
            <div className="flex flex-col justify-start items-start pl-6">
              <NavLink
                to="/admin/categories"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                  className="ml-2 text-sm"
                >
                  Categories
                </div>
              </NavLink>
              <NavLink
                to="/admin/courselist"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="ml-2 text-sm"
                >
                  Course List
                </div>
              </NavLink>
            </div>
          </AccordionBody>
        </Accordion>
        {/* Students */}
        <Accordion open={open === 2} className="my-0">
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className="shadow-none border-none py-0 my-0"
          >
            <div
              className="flex items-center font-semibold w-full py-1 my-1 px-1.5 text-lg transition-all text-[#6e82a5] hover:text-[var(--theme-color)] hover:transition-all"
              activeclassName="active"
            >
              <div className=" px-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
              </div>
              <div
                style={{ display: isOpen ? "flex" : "none" }}
                className="ml-2"
              >
                <div>Students</div>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform mt-1.5 mx-2 ${
                    open && open === 2 ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="py-0 text-md">
            <div className="flex flex-col justify-start items-start pl-6">
              <NavLink
                to="/admin/addStudent"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                  className="ml-2 text-sm"
                >
                  Add Student
                </div>
              </NavLink>
              <NavLink
                to="/admin/students"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="ml-2 text-sm"
                >
                  Student List
                </div>
              </NavLink>
            </div>
          </AccordionBody>
        </Accordion>
        {/* Instructors */}
        <Accordion open={open === 3} className="my-0">
          <AccordionHeader
            onClick={() => handleOpen(3)}
            className="shadow-none border-none py-0 my-0"
          >
            <div
              className="flex items-center font-semibold w-full py-1 my-1 px-1.5 text-lg transition-all text-[#6e82a5] hover:text-[var(--theme-color)] hover:transition-all"
              activeclassName="active"
            >
              <div className=" px-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <div
                style={{ display: isOpen ? "flex" : "none" }}
                className="ml-2"
              >
                <div>Instructors</div>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform mt-1.5 mx-2 ${
                    open && open === 3 ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="py-0 text-md">
            <div className="flex flex-col justify-start items-start pl-6">
              <NavLink
                to="/admin/addInstructor"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                  className="ml-2 text-sm"
                >
                  Add Instructor
                </div>
              </NavLink>
              <NavLink
                to="/admin/instructorList"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="ml-2 text-sm"
                >
                  Instructor List
                </div>
              </NavLink>
            </div>
          </AccordionBody>
        </Accordion>
        {/* Enrollment */}
        <NavLink
          to="/admin/enrollment"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Enrollment
          </div>
        </NavLink>
        {/* Library */}
        <Accordion open={open === 4} className="my-0">
          <AccordionHeader
            onClick={() => handleOpen(4)}
            className="shadow-none border-none py-0 my-0"
          >
            <div
              className="flex items-center font-semibold w-full py-1 my-1 px-1.5 text-lg transition-all text-[#6e82a5] hover:text-[var(--theme-color)] hover:transition-all"
              activeclassName="active"
            >
              <div className=" px-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div
                style={{ display: isOpen ? "flex" : "none" }}
                className="ml-2"
              >
                <div>Library</div>
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform mt-1.5 mx-2 ${
                    open && open === 4 ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </AccordionHeader>
          <AccordionBody className="py-0 text-md">
            <div className="flex flex-col justify-start items-start pl-6">
              <NavLink
                to="/admin/book-list"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{
                    display: isOpen ? "block" : "none",
                  }}
                  className="ml-2 text-sm"
                >
                  Book List
                </div>
              </NavLink>
              {/* <NavLink
                to="/admin/instructorList"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="ml-2 text-sm"
                >
                  Add Student
                </div>
              </NavLink> */}
            </div>
          </AccordionBody>
        </Accordion>
        {/*  Master Admin */}
        <NavLink
          to="/admin/adminProfile"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Master Admin
          </div>
        </NavLink>
        {/* Expenses */}
        <NavLink
          to="/admin/expenses"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Expenses
          </div>
        </NavLink>
        {/* Income */}
        <NavLink
          to="/admin/income"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Income
          </div>
        </NavLink>
        {/* Settings */}
        <NavLink
          to="/admin/AdminSettings"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
          // style={{ ...justify }}
          activeclassName="active"
        >
          <div className=" px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Settings
          </div>
        </NavLink>
      </div>
      <main className="ml-16 sm:ml-0 relative h-[100vh] overflow-y-scroll scrollbar-hide grow flex flex-col">
        <div className="">
          <AdminHeader
            updateAdminAuth={updateAdminAuth}
            adminAuth={adminAuth}
          />
        </div>
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default AdminSidebar;

import React, { useState, createContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../assets/styles/InstructorSidebar.css";
import AdminHeader from "./AdminHeader";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import InstructorHeader from "./InstructorHeader";
import baseurl from "../Config";

const InstructorSidebar = ({
  children,
  instructorAuth,
  updateInstructorAuth,
}) => {
  const [instructorData, setInstructorData] = useState("Jesse Hall");
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(0);
  const toggle = () => setIsOpen(!isOpen);

  // useEffect(() => {
  //   getinstructorData();
  // }, [instructorAuth]);

  // const getinstructorData = () => {
  //   fetch(`${baseurl}/api/instructor/${instructorAuth}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       setInstructorData(result[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

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
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="text-4xl"
          >
            S<span className="text-[var(--theme-color)]">M</span>S
          </h1>
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className=" cursor-pointer"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {/* Dashboard */}
        <NavLink
          to="/instructor/instructor-dashboard"
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
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Dashboard
          </div>
        </NavLink>
        {/* Students */}
        {/* <NavLink
          to="/instructor/instructor-students"
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Students
          </div>
        </NavLink> */}
        {/* Courses */}
        <NavLink
          to="/instructor/instructor-courses"
          className="flex items-center justify-start font-semibold py-2 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Courses
          </div>
        </NavLink>
        {/* Fees */}
        <NavLink
          to="/instructor/instructor-fees"
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
            Fees
          </div>
        </NavLink>
        {/* Attendance */}
        <NavLink
          to="/instructor/instructor-Attendence"
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Attendance
          </div>
        </NavLink>
        {/* Schedule Classes */}
        <NavLink
          to="/instructor/schedule-classes"
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
                d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Schedule Classes
          </div>
        </NavLink>
        {/* Assignments */}
        <NavLink
          to="/instructor/assignments"
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
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Assignments
          </div>
        </NavLink>
        {/* Events */}
        <NavLink
          to="/instructor/instructor-events"
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
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Events
          </div>
        </NavLink>
        {/* Result */}
        <NavLink
          to="/instructor/instructor-result"
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
            Result
          </div>
        </NavLink>
        {/* Queries */}
        <NavLink
          to="/instructor/instructor-queries"
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
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-2">
            Queries
          </div>
        </NavLink>
        {/* Courses
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
                to="/admin/addcourse"
                className="flex items-center justify-center font-semibold my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
                style={{ ...justify }}
                activeclassName="active"
              >
                <div className=" px-2 py-1"></div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="ml-2 text-sm"
                >
                  Add Course
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
        </Accordion> */}
      </div>
      <main className="ml-16 sm:ml-0 relative h-[100vh] overflow-y-scroll scrollbar-hide grow flex flex-col">
        <div className="">
          <InstructorHeader
            updateInstructorAuth={updateInstructorAuth}
            instructorAuth={instructorAuth}
          />
        </div>
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default InstructorSidebar;

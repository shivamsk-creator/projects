import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../sidebar/sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-[100vh] overflow-hidden">
      <div
        style={{
          width: isOpen ? "200px" : "70px",
        }}
        className="absolute top-0 left-0 z-20 sm:static h-[100vh] bg-[var(--secondary-color)] text-white transition-all duration-300 overflow-y-scroll scrollbar-hide box-content"
      >
        <div
          className="flex items-center  py-4 text-2xl h-16 justify-center"
          style={{ justifyContent: isOpen ? "end" : "center" }}
        >
          {/* <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="text-4xl"
          >
            S<span className="text-[var(--theme-color)]">M</span>S
          </h1> */}
          <div
            style={{
              marginRight: isOpen ? "20px" : "0px",
              marginLeft: isOpen ? "50px" : "0px",
            }}
            className=" cursor-pointer"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>

        {/* Academic */}
        <NavLink
          to="/student/academics"
          className="flex items-center justify-start pl-4 font-semibold py-3 my-1 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Academics
          </div>
        </NavLink>
        {/* Curses */}
        <NavLink
          to="/student/courses"
          className="flex items-center justify-start pl-4 font-semibold py-3 my-1 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Courses
          </div>
        </NavLink>
        {/* Result */}
        <NavLink
          to="/student/result"
          className="flex items-center justify-start pl-4 font-semibold py-3 my-1 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Result
          </div>
        </NavLink>
        {/* Payments */}
        <NavLink
          to="/student/fees"
          className="flex items-center justify-start pl-4 font-semibold py-3 my-1 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
                d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Fees
          </div>
        </NavLink>
        {/* Queries */}
        <NavLink
          to="/student/queries"
          className="flex items-center justify-start pl-4 font-semibold py-3 my-1 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Queries (QA)
          </div>
        </NavLink>
      </div>
      <main className="ml-16 sm:ml-0 relative  overflow-y-scroll scrollbar-hide grow flex flex-col">
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;

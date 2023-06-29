import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/styles/studentSidebar.css";
import StudentHeader from "./StudentHeader";

const StudentSidebar = ({ children, updateAuth, auth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [open, setOpen] = useState(0);

  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  let justify = { justifyContent: isOpen ? "start" : "center" };

  return (
    <div className="flex relative h-[100vh] overflow-hidden">
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
        {/* Dashboard */}
        <NavLink
          to="/student/dashboard"
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
            Dashboard
          </div>
        </NavLink>
        {/* Teachers */}
        {/* <NavLink
          to="/student/teachers"
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
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Teachers
          </div>
        </NavLink> */}
        {/* Academic */}
        <NavLink
          to="/student/academic"
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
            Academic
          </div>
        </NavLink>
        {/* Marks */}
        <NavLink
          to="/student/marks"
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
            Marks
          </div>
        </NavLink>
        {/* Library */}
        <NavLink
          to="/student/library"
          className="flex items-center justify-start pl-4 font-semibold py-3 my-2 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all"
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
                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Library
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
        {/* Assignments */}
        <NavLink
          to="/student/assignments"
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
                d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Assignments
          </div>
        </NavLink>
        {/* Payments */}
        <NavLink
          to="/student/payments"
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
            Payments
          </div>
        </NavLink>
        {/* Logout */}
        {/* <div
          className="flex items-center justify-start pl-4 font-semibold py-3 my-1 px-1.5 text-lg transition-all hover:text-[var(--theme-color)] hover:transition-all cursor-pointer"
          onClick={() => {
            localStorage.removeItem("auth");
            updateAuth();
            navigate("/");
          }}
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className="ml-1">
            Logout
          </div>
        </div> */}
      </div>
      <main className="ml-16 sm:ml-0 relative  overflow-y-scroll scrollbar-hide grow flex flex-col">
        <div className="">
          <StudentHeader updateAuth={updateAuth} auth={auth} />
        </div>
        <div className="">{children}</div>
      </main>
    </div>
  );
};

export default StudentSidebar;

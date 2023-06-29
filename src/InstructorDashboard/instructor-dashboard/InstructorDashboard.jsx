import React from "react";
import { useNavigate } from "react-router-dom";

const InstructorDashboard = () => {
  const navigate = useNavigate();

  const goto = (url) => {
    navigate(url);
  };
  return (
    <>
      <section className=" p-5 sm:p-5 md:p-10 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {/* div */}
          <div
            onClick={() => goto("/instructor/instructor-courses")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Courses
          </div>
          <div
            onClick={() => goto("/instructor/instructor-fees")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Fees
          </div>
          <div
            onClick={() => goto("/instructor/schedule-classes")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Schedule Classes
          </div>
          <div
            onClick={() => goto("/instructor/assignments")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Assignment
          </div>
          <div
            onClick={() => goto("/instructor/instructor-events")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Events
          </div>
          <div
            onClick={() => goto("/instructor/instructor-result")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Results
          </div>
          <div
            onClick={() => goto("/instructor/instructor-queries")}
            className=" w-48 h-48 p-10 m-3 text-2xl text-[var(--secondary-color)] font-semibold text-center flex justify-center items-center bg-gray-200 border rounded-lg shadow-xl hover:-translate-y-4 transition cursor-pointer"
          >
            Queries
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorDashboard;

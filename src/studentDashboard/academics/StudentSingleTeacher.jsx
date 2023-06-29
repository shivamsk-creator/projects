import React, { useEffect, useState } from "react";
import man from "../../assets/images/man.jpg";
import baseurl from "../../Config";

const StudentSingleTeacher = ({ enroll }) => {
  const [instructorId, setOneInstructorId] = useState("");
  const [instructorData, setInstructorData] = useState("");

  useEffect(() => {
    getOneInstructor(enroll.course, instructorId);
  }, [enroll, instructorId]);

  const getOneInstructor = (courseid, instructorId) => {
    fetch(baseurl + "/api/course/" + courseid, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setOneInstructorId(result[0].instructor);
      })
      .catch((err) => {
        console.log(err);
      });

    fetch(baseurl + "/api/instructor/" + instructorId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setInstructorData(result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="m-3 rounded-lg border shadow-xl w-fit py-5 px-5 flex flex-row items-center">
      <img src={man} className="h-14 w-14 rounded-full mr-5" alt="" />
      <div>
        <h5 className="text-xs font-bold ">{instructorData.name}</h5>
        <p className="text-xs flex my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          {instructorData.contact}
        </p>
        <p className="text-xs flex my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 mx-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          {instructorData.email}
        </p>
      </div>
    </div>
  );
};

export default StudentSingleTeacher;

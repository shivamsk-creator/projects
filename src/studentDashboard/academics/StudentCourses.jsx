import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentSingleCourse from "./StudentSingleCourse";
import baseurl from "../../Config";

const StudentCourses = ({ enrollData }) => {
  const [courses, setCourses] = useState([]);
  const [iname, setIname] = useState("");
  const [cname, setCname] = useState("");

  useEffect(() => {
    setCourses(enrollData);
  }, [enrollData]);

  function getInstructorData(id) {
    fetch(baseurl + "/api/instructor/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setIname(result[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
    return iname;
  }
  function getCategoryData(id) {
    fetch(baseurl + "/api/category/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCname(result[0].name);
      })
      .catch((err) => {
        console.log(err);
      });
    return cname;
  }

  return (
    <>
      <div className="flex flex-row justify-around flex-wrap my-10">
        {courses.map((course) => {
          return (
            <StudentSingleCourse
              courseId={course.course}
              getInstructorData={getInstructorData}
              getCategoryData={getCategoryData}
            />
          );
        })}
      </div>
    </>
  );
};

export default StudentCourses;

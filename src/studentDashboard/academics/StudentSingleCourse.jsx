import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../../Config";

const StudentSingleCourse = ({
  courseId,
  getInstructorData,
  getCategoryData,
}) => {
  const [course, setCourse] = useState("");

  //   console.log(course);

  useEffect(() => {
    getCourseList();
  }, [courseId]);

  const getCourseList = () => {
    fetch(baseurl + "/api/course/" + courseId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCourse(result[0]);
        // console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getInstName = () => {
    let inst = getInstructorData(course.instructor);
    return inst;
  };
  const getCatName = () => {
    let cat = getCategoryData(course.category);
    return cat;
  };

  const navigate = useNavigate();
  const coursedetails = () => {
    navigate("/student/academic/course/" + courseId);
  };
  return (
    <div
      onClick={coursedetails}
      className="w-64 m-3 rounded-lg border shadow-xl  flex flex-col justify-center text-center items-center hover:-translate-y-4 transition cursor-pointer"
    >
      <img
        src={`${baseurl}/coursepic/${course.img}`}
        className="h-40 w-full rounded-tr-lg rounded-tl-lg"
        alt=""
      />
      <div className="py-5 px-3 flex flex-col justify-center items-center flex-grow">
        <h5 className="text-lg font-bold ">{course.title}</h5>
        <p>{course.desc}</p>
        <p className="text-xs flex items-center my-2">
          {/* <img src={man} className="h-5 w-5 rounded-full mx-2" alt="" /> */}
          Instructor : {getInstName()}
        </p>
        <p className="text-xs flex items-center my-2">
          Category : {getCatName()}
        </p>
      </div>
    </div>
  );
};

export default StudentSingleCourse;

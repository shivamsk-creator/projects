import React, { useEffect, useState } from "react";
import baseurl from "../../Config";
import StudentSingleTeacher from "./StudentSingleTeacher";

const StudentTeachers = ({ enrollData }) => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    setInstructors(enrollData);
  }, [enrollData]);

  return (
    <>
      <div className="flex flex-row justify-around flex-wrap">
        {instructors.map((enroll) => {
          return <StudentSingleTeacher enroll={enroll} />;
        })}
      </div>
    </>
  );
};

export default StudentTeachers;

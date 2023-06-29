import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InstructorProtected = (props) => {
  const { instructorAuth, Component } = props;
  let navigate = useNavigate();
  useEffect(() => {
    // let login = localStorage.getItem("login");

    if (!instructorAuth) {
      navigate("/login-instructor");
    }
  });

  return (
    <>
      <Component instructorAuth={instructorAuth} />
    </>
  );
};

export default InstructorProtected;

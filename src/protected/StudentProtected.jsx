import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentProtected = (props) => {
  const { auth, Component } = props;
  let navigate = useNavigate();
  useEffect(() => {
    // let login = localStorage.getItem("login");

    if (!auth) {
      navigate("/login-student");
    }
  });

  return (
    <>
      <Component auth={auth} />
    </>
  );
};

export default StudentProtected;

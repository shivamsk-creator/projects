import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtected = (props) => {
  const { adminAuth, Component } = props;
  let navigate = useNavigate();
  useEffect(() => {
    // let login = localStorage.getItem("login");

    if (!adminAuth) {
      navigate("/login-admin");
    }
  });

  return (
    <>
      <Component adminAuth={adminAuth} />
    </>
  );
};

export default AdminProtected;

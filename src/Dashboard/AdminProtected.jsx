import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  let navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");

    if (!login) {
      navigate("/login");
    }
  });

  return (
    <>
      <Component />
    </>
  );
};

export default Protected;

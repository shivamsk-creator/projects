import React, { useEffect } from "react";
import { toast } from "react-toastify";

const About = () => {
  // toast("Wow so easy!");
  return (
    <div
      onClick={() => {
        toast.warn("Shivam");
      }}
    >
      About
    </div>
  );
};

export default About;

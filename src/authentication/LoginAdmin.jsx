import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../Config";
import { toast } from "react-toastify";

const LoginAdmin = ({ updateAdminAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLoginPress = (e) => {
    e.preventDefault();
    const data = { email, password };

    // fetch(baseurl + "/api/adminlogin", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return res.json();
    //     }
    //   })
    //   .then((result) => {
    //     //console.log(result);
    //     if (result.status === true && result.code === 200) {
    //       console.log(result.data._id);
    //       window.localStorage.setItem(
    //         "adminAuth",
    //         JSON.stringify(result.data._id)
    //       );
    //       updateAdminAuth();
    //       toast.success("Successfully LoggedIn");
    //       navigate(
    //         "/admin/dashboard"
    //         // , {
    //         //   state: {
    //         //     _id: result.data._id,
    //         //     name: result.data.name,
    //         //     email: result.data.email,
    //         //     contact: result.data.contact,
    //         //   },
    //         // }
    //       );
    //     } else {
    //       toast.error(`${result.message}`);
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    window.localStorage.setItem("adminAuth", JSON.stringify("true"));
    updateAdminAuth();
    toast.success("Successfully LoggedIn");
    navigate("/admin/dashboard");
  };

  return (
    <>
      <section className=" p-5">
        <div className=" w-96 my-10 rounded-lg border shadow-xl mx-auto">
          <h1 className="px-5 sm:px-10 mt-5 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Admin Login
          </h1>
          {/* Form */}
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* email */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Registered Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="rohan644@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              {/* password */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div>
                <Button variant="gradient" color="blue" onClick={onLoginPress}>
                  <span>Login</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginAdmin;

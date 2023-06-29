import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const ModalUpdateAdmin = ({ open, handleOpen, getAdminData, adminData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [degree, setDegree] = useState("");
  const [exp, setExp] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    setName(adminData.name);
    setEmail(adminData.email);
    setAddress(adminData.address);
    setGender(adminData.gender);
    setDob(adminData.dob);
    setQualification(adminData.qualification);
    setDegree(adminData.degree);
    setExp(adminData.exp);
    setContact(adminData.contact);
    setPassword(adminData.password);
    setProfilePic(adminData.profilePic);
  }, [adminData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Empty the value of fields
    setName("");
    setEmail("");
    setAddress("");
    setGender("");
    setDob("");
    setQualification("");
    setDegree("");
    setExp("");
    setContact("");
    setPassword("");
    setProfilePic("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("qualification", qualification);
    formData.append("degree", degree);
    formData.append("exp", exp);
    formData.append("contact", contact);
    formData.append("password", password);
    formData.append("profilePic", profilePic);

    // Post Api For Posting Data
    fetch(baseurl + "/api/admin/" + adminData._id, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then(() => {
        toast.info("Updated Successfully");
        getAdminData();
        handleOpen();
      });
  };
  return (
    <>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader className="text-center justify-center">
          {" "}
          Update Profile
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form onSubmit={handleSubmit} className="w-full px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="john@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  placeholder="7th Street, Mexico, USA"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="gender"
                >
                  Gender
                </label>
                <div className="flex gap-10">
                  <Radio
                    id="male"
                    name="type"
                    label="Male"
                    value={gender}
                    onChange={(e) => {
                      setGender("male");
                    }}
                  />
                  <Radio
                    id="female"
                    name="type"
                    label="Female"
                    value={gender}
                    onChange={(e) => {
                      setGender("female");
                    }}
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="dob"
                >
                  Date Of Birth
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="dob"
                  type="date"
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="address"
                >
                  qualification{" "}
                  <span className="text-xs mx-1 text-gray-500 lowercase font-light">
                    (seperated by comma)
                  </span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="qualification"
                  type="text"
                  placeholder="B.Tech, MCA"
                  value={qualification}
                  onChange={(e) => {
                    setQualification(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="degree"
                >
                  Highest Degree
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="degree"
                  type="text"
                  placeholder="MCA"
                  value={degree}
                  onChange={(e) => {
                    setDegree(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="exp"
                >
                  Experience
                  <span className="text-xs mx-1 text-gray-500 lowercase font-light">
                    (in years)
                  </span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="exp"
                  type="number"
                  placeholder="2.5"
                  value={exp}
                  onChange={(e) => {
                    setExp(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
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
                  placeholder="*******"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="profilePic"
                >
                  Profile Pic
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="profilePic"
                  type="file"
                  onChange={(e) => {
                    setProfilePic(e.target.files[0]);
                  }}
                />

                <input
                  type="submit"
                  className="h-fit p-2 my-5 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
                />
              </div>
            </div>
          </form>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalUpdateAdmin;

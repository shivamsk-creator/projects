import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";

const ModalUpdateProfile = ({
  open,
  handleOpen,
  studentData,
  getStudentData,
}) => {
  const [loader, setLoader] = useState(false);
  const [regno, setRegno] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [admdate, setAdmdate] = useState("");
  const [refby, setRefby] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    setRegno(studentData.regno);
    setName(studentData.name);
    setFname(studentData.fname);
    setAddress(studentData.address);
    setContact(studentData.contact);
    setEmail(studentData.email);
    setGender(studentData.gender);
    setDob(studentData.dob);
    setAdmdate(studentData.admdate);
    setRefby(studentData.refby);
    setPassword(studentData.password);
    setProfilePic(studentData.profilePic);
  }, [studentData]);

  // PUT Api For Updating Data
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData();
    formData.append("regno", regno);
    formData.append("name", name);
    formData.append("fname", fname);
    formData.append("address", address);
    formData.append("contact", contact);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("admdate", admdate);
    formData.append("refby", refby);
    formData.append("password", password);
    formData.append("profilePic", profilePic);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // Empty the value of fields
    setName("");
    setEmail("");
    setRegno("");
    setFname("");
    setAddress("");
    setGender("");
    setAdmdate("");
    setRefby("");
    setDob("");
    setPassword("");
    setProfilePic("");

    // Post Api For Updating Data
    fetch(baseurl + "/api/students/" + studentData._id, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        toast.success("Updated Successfully");
        setLoader(false);
        getStudentData();
        handleOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {loader ? (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <Dialog open={open} handler={handleOpen} size="lg">
          <DialogHeader className="text-center justify-center">
            {" "}
            Update Profile
          </DialogHeader>
          <DialogBody divider className="h-[25rem] overflow-y-scroll">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap items-center mb-6">
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
                    htmlFor="fatherName"
                  >
                    Father Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="fatherName"
                    type="text"
                    placeholder="Harry Doe"
                    value={fname}
                    onChange={(e) => {
                      setFname(e.target.value);
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
                <div className="w-full md:w-1/2 px-3 mb-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="regno"
                  >
                    Registration No.
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="regno"
                    type="number"
                    placeholder="7643858"
                    value={regno}
                    onChange={(e) => {
                      setRegno(e.target.value);
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
                    htmlFor="contact"
                  >
                    Contact
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="contact"
                    type="number"
                    placeholder="9257643858"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
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
                    htmlFor="admdate"
                  >
                    Admission Date
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="admdate"
                    type="date"
                    value={admdate}
                    onChange={(e) => {
                      setAdmdate(e.target.value);
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="refBy"
                  >
                    Referred By
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="refBy"
                    type="text"
                    placeholder="Suman Yadav"
                    value={refby}
                    onChange={(e) => {
                      setRefby(e.target.value);
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
                </div>
                <div className="w-full mx-3">
                  <input
                    type="submit"
                    className="h-fit p-2 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
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
      )}
    </>
  );
};

export default ModalUpdateProfile;

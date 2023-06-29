import React, { useState } from "react";
import { Radio, Button } from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddStudentForm = () => {
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

  const navigate = useNavigate();

  const data = {
    regno,
    name,
    fname,
    address,
    contact,
    email,
    gender,
    dob,
    admdate,
    refby,
  };

  console.log(data);

  const onSubmitClick = () => {
    // Empty the value of fields
    setName("");
    setEmail("");
    setRegno("");
    setFname("");
    setAddress("");
    setGender("");
    setAdmdate("");
    setRefby("");
    setContact("");
    setDob("");
    // Post Api For Posting Data
    fetch(baseurl + "/api/students", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result.status === true && result.code === 200) {
          toast.success("Student Added Successfully");
          navigate("/admin/students");
        } else {
          toast.error(`${result.message}`);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl mx-auto p-5">
        <h2 className="text-3xl text-center font-bold my-5">Add Student</h2>
        <div className="w-[80%] md:px-5 lg:px-10 mx-auto mt-20">
          <form>
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div> */}
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
              <div className="w-full px-3 mb-3">
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
            </div>
          </form>
          <Button onClick={onSubmitClick}>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default AddStudentForm;

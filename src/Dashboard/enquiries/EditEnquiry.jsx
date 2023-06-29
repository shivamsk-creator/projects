import React, { useState } from "react";
import { Radio, Button, Select, Option } from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const EditEnquiry = () => {
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [counseller, setCounseller] = useState("");
  const [refby, setRefby] = useState("");
  const [course, setCourse] = useState("");
  const [note, setNote] = useState("");

  const onSubmitClick = () => {
    // Empty the value of fields
    setName("");
    setEmail("");
    setContact("");
    setFname("");
    setAddress("");
    setGender("");
    setRefby("");
    setDob("");
    // Post Api For Posting Data

    const updatedData = {
      contact,
      name,
      fname,
      address,
      email,
      gender,
      dob,
      refby,
    };

    fetch(baseurl + "/api/students", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then(() => toast.success("Updated Successfully"));
  };

  return (
    <>
      <div className=" p-5">
        <h2 className="text-3xl text-center font-bold my-5">Edit Enquiry</h2>
        <div className="w-[80%] md:px-5 lg:px-10 mx-auto mt-20">
          <form>
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* Name */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* Father NAme */}
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
              {/* Email */}
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
              {/* Contact No. */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="contact"
                >
                  Contact No.
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="contact"
                  type="number"
                  placeholder="764385845"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </div>
              {/* Address */}
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
              {/* Referred By */}
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
              {/* Gender */}
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
              {/* Date OF Birth */}
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
              {/* Expected DOJ */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="doj"
                >
                  Expected Date Of Joining
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="doj"
                  type="date"
                  value={doj}
                  onChange={(e) => {
                    setDoj(e.target.value);
                  }}
                />
              </div>
              {/* Counseller Name */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="counseller"
                >
                  Counseller Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="counseller"
                  type="text"
                  placeholder="Er. Gupta sir"
                  value={counseller}
                  onChange={(e) => {
                    setCounseller(e.target.value);
                  }}
                />
              </div>
              {/* Course */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Course
                </label>
                <Select
                  id="course"
                  label="Select Course"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  <Option value="Select Course">Select Course</Option>
                  <Option value="Web Development">CCNA</Option>
                  <Option value="Mobile Application">ADCA</Option>
                  <Option value="Graphics Design">CCC</Option>
                </Select>
              </div>
              {/* Note */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Note
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="counseller"
                  type="text"
                  placeholder="Your Message Here....."
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
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

export default EditEnquiry;

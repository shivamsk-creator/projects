import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import baseurl from "../../Config";

const ModalAddCourse = ({ open, handleOpen }) => {
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [level, setLevel] = useState("");
  const [lesson, setLesson] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [price, setPrice] = useState("");
  const [deadline, setDeadline] = useState("");

  const data = {
    title,
    // cat,
    level,
    lesson,
    thumbnail,
    desc,
    // status,
    price,
    deadline,
  };
  console.log(data);

  const onSubmitClick = () => {
    // Empty the value of fields
    setTitle("");
    // setCat("");
    setLevel("");
    setLesson("");
    setThumbnail("");
    setDesc("");
    // setStatus("");
    setPrice("");
    setDeadline("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/course", {
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
          alert("Course Added Successfully");
        } else {
          alert(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Add Course
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5">
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
              {/* Course Name */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course-name"
                >
                  Course Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="course-name"
                  type="text"
                  placeholder="e.g., CCC"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              {/* Category */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="category"
                >
                  Course Category
                </label>
                <Select
                  id="category"
                  label="Select Category"
                  value={cat}
                  // onChange={(e) => {
                  //   setCat(e.target.value);
                  // }}
                >
                  <Option value={"Web Development"}>Web Development</Option>
                  <Option value={"Mobile Application"}>
                    Mobile Application
                  </Option>
                  <Option value={"Graphics Design"}>Graphics Design</Option>
                </Select>
              </div>
              {/* Course Level */}
              {/* <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="level"
                >
                  Course Level
                </label>
                <Select
                  id="level"
                  label="Select Category"
                  value={level}
                  onChange={(e) => {
                    setLevel(e.target.value);
                  }}
                >
                  <Option value="Beginners">Beginners</Option>
                  <Option value="Intermediate">Intermediate</Option>
                  <Option value="Advanced">Advanced</Option>
                </Select>
              </div> */}
              {/* Course Level */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="level"
                >
                  Course Level
                </label>
                <div className="flex gap-2 flex-wrap">
                  <Radio
                    id="Beginner"
                    name="type"
                    label="Beginner"
                    onChange={(e) => {
                      setLevel("Beginner");
                    }}
                  />
                  <Radio
                    id="intermediate"
                    name="type"
                    label="Intermediate"
                    onChange={(e) => {
                      setLevel("Intermediate");
                    }}
                  />
                  <Radio
                    id="advanced"
                    name="type"
                    label="Advanced"
                    onChange={(e) => {
                      setLevel("Advanced");
                    }}
                  />
                </div>
              </div>
              {/* Total Lessons */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson"
                >
                  Total Lessons
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="lesson"
                  type="number"
                  placeholder="9"
                  value={lesson}
                  onChange={(e) => {
                    setLesson(e.target.value);
                  }}
                />
              </div>
              {/* Thumbnail */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="thumbnail"
                >
                  Course Thumbnail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="thumbnail"
                  type="file"
                  // value={thumbnail}
                  onChange={(e) => {
                    setThumbnail(e.target.files[0]);
                  }}
                />
              </div>
              {/* Total Description */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson"
                >
                  Course Description
                </label>
                <Textarea
                  resize={true}
                  label="Message"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              {/* Status */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="lesson"
                >
                  Status
                </label>
                <div className="flex flex-wrap gap-2">
                  <Radio
                    id="Active"
                    name="type"
                    label="Active"
                    value="Active"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <Radio
                    id="Pending"
                    name="type"
                    label="Pending"
                    value="Pending"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <Radio
                    id="Rejected"
                    name="type"
                    label="Rejected"
                    value="Rejected"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* Total Lessons */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Course Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="price"
                  type="number"
                  placeholder="200"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="deadline"
                >
                  Deadline
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="deadline"
                  type="date"
                  value={deadline}
                  onChange={(e) => {
                    setDeadline(e.target.value);
                  }}
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
          <Button variant="gradient" color="blue" onClick={onSubmitClick}>
            <span>Save</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAddCourse;

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const ModalAddClass = ({ open, handleOpen, getScheduledClassesList }) => {
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [link, setLink] = useState("");
  const [contact_instructor, setContact_instructor] = useState("");

  const data = { course, topic, date, time, link, contact_instructor };
  console.log(data);

  const onsubmitClick = () => {
    // Empty the fields
    // setCourse("");
    // setTopic("");
    // setDate("");
    // setTime("");
    // setLink("");
    // const dummy = {
    //   course: "bca",
    //   topic: "htmnl",
    //   date: "2023-10-09T00:00:00.000Z",
    //   link: "a.com",
    //   time: "240",
    //   contact_instructor: "67683287712",
    // };
    // console.log(dummy);
    // Post Api For Posting Data
    fetch(baseurl + "/api/class", {
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
        toast.success("Scheduled Class Added Successfully");
        handleOpen();
        getScheduledClassesList();
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
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Add Class
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* topic */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="topic"
                >
                  Topic
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="topic"
                  type="text"
                  placeholder="Intro to AI"
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                />
              </div>
              {/* Course */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Course
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="course"
                  type="text"
                  placeholder="Graphic Designing"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                />
              </div>
              {/* Date */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              {/* time */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="time"
                >
                  Time
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                />
              </div>
              {/* link */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="link"
                >
                  Link
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="link"
                  type="text"
                  placeholder="http://meet.google.com"
                  value={link}
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </div>
              {/* Instructor */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="instructor"
                >
                  Instructor ID
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="instructor"
                  type="number"
                  placeholder="87521"
                  value={contact_instructor}
                  onChange={(e) => {
                    setContact_instructor(e.target.value);
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
          <Button variant="gradient" color="blue" onClick={onsubmitClick}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAddClass;

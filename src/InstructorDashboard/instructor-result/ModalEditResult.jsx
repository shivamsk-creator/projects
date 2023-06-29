import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ModalAddResult = ({ open, handleOpen, item, getMarksList }) => {
  const [name, setName] = useState("");
  const [regno, setRegno] = useState(0);
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [total_marks, setTotal_marks] = useState("");
  const [obtain_marks, setObtain_marks] = useState("");

  useEffect(() => {
    setName(item.name);
    setRegno(item.regno);
    setCourse(item.course);
    setTopic(item.topic);
    setObtain_marks(item.obtain_marks);
  }, [item]);

  const reg = item.regno;

  const onSubmitClick = () => {
    let updatedData = {
      name,
      regno,
      course,
      topic,
      obtain_marks,
    };

    fetch(baseurl + "/api/marks/" + reg, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.info("Updated Successfully");
        handleOpen();
        getMarksList();
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
          Edit Result
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* name */}
              <div className="w-full px-3 mb-3">
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
                  placeholder="Rohan"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              {/* Regno */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="regno"
                >
                  Regno
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="regno"
                  type="number"
                  placeholder="32144"
                  value={regno}
                  onChange={(e) => {
                    setRegno(e.target.value);
                  }}
                />
              </div>
              {/* course */}
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
                  placeholder="Intro"
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                />
              </div>
              {/* Total Marks */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="total_marks"
                >
                  Total Marks
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="total_marks"
                  type="text"
                  placeholder="7645"
                  value={total_marks}
                  onChange={(e) => {
                    setTotal_marks(e.target.value);
                  }}
                />
              </div>
              {/* Obtained Marks */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="obtain_marks"
                >
                  Obtained Mark
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="obtain_marks"
                  type="text"
                  placeholder="7645"
                  value={obtain_marks}
                  onChange={(e) => {
                    setObtain_marks(e.target.value);
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

export default ModalAddResult;

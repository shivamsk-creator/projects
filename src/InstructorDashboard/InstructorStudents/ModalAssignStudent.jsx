import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";

const ModalAssignStudent = ({ open, handleOpen }) => {
  const [course, setCourse] = useState("");
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Assign Student
        </DialogHeader>
        <DialogBody divider className=" overflow-y-scroll">
          <form>
            <div className="flex flex-wrap mt-5 mb-6">
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="course"
                >
                  Select Course
                </label>
                <select
                  label="Select Course"
                  className="p-2 border focus-visible:outline-none"
                  value={course}
                  onChange={(e) => {
                    setCourse(e.target.value);
                  }}
                >
                  <option value="Web Development">Web Development</option>
                  <option value="Android Development">
                    Android Development
                  </option>
                  <option value="CCC">CCC</option>
                  <option value="Python">Python</option>
                </select>
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
          <Button variant="gradient" color="blue">
            <span>Assign</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAssignStudent;

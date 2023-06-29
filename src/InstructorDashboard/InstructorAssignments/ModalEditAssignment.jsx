import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const ModalEditAssignment = ({ item, open, handleOpen, getAssignmentList }) => {
  const [title, setTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [due_date, setDue_date] = useState("");
  const [upload, setUpload] = useState("");
  const [contact_instructor, setContact_instructor] = useState("");
  const data = { title, instructions, due_date, upload, contact_instructor };
  console.log(data);

  useEffect(() => {
    setTitle(item.title);
    setInstructions(item.instructions);
    setDue_date(item.due_date);
    setUpload(item.upload);
    setContact_instructor(item.contact_instructor);
  }, [item]);

  const onsubmitClick = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("instructions", instructions);
    formData.append("due_date", due_date);
    formData.append("upload", upload);
    formData.append("contact_instructor", contact_instructor);

    // Empty the fields
    setTitle("");
    setInstructions("");
    setDue_date("");
    setUpload("");
    setContact_instructor("");

    const instructor = item.contact_instructor;

    // Post Api For Posting Data
    fetch(baseurl + "/api/assign/" + instructor, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.info("Assignment Updated Successfully");
        handleOpen();
        getAssignmentList();
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
          Edit Assignment
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 sm:px-10 mt-5" onSubmit={onsubmitClick}>
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* title */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Intro"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              {/* Instructions */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="instructions"
                >
                  Instructions
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="instructions"
                  id="instructions"
                  rows={7}
                  placeholder="In this Assignment....."
                  value={instructions}
                  onChange={(e) => {
                    setInstructions(e.target.value);
                  }}
                />
              </div>
              {/* Due Date */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="due_date"
                >
                  Due Date
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="due_date"
                  id="due_date"
                  type="date"
                  value={due_date}
                  onChange={(e) => {
                    setDue_date(e.target.value);
                  }}
                />
              </div>
              {/* Upload Task */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="upload"
                >
                  Upload Task
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="upload"
                  id="upload"
                  type="file"
                  onChange={(e) => {
                    setUpload(e.target.files[0]);
                  }}
                />
              </div>
              {/* Instructor ID */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="contact_instructor"
                >
                  Instructor Contact
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="contact_instructor"
                  id="contact_instructor"
                  placeholder="Instructor Contact Number"
                  type="number"
                  value={contact_instructor}
                  onChange={(e) => {
                    setContact_instructor(e.target.value);
                  }}
                />
              </div>
            </div>
            <input
              type="submit"
              className="p-2 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
            />
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

export default ModalEditAssignment;

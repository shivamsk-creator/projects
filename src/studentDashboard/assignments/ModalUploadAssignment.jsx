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

const ModalUploadAssignment = ({ studentData, item, open, handleOpen }) => {
  const [upload, setUpload] = useState("");
  const [name, setName] = useState("");
  const [regno, setRegno] = useState("");
  console.log(studentData);

  useEffect(() => {
    setName(studentData.name);
    setRegno(studentData.regno);
  }, [studentData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("upload", upload);
    formData.append("name", name);
    formData.append("regno", regno);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // Empty the value of fields
    // setUpload("");

    // Post Api For Posting Data
    fetch(`${baseurl}/api/assign/${studentData.regno}`, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        alert("Assignment Submitted  Successfully");
        handleOpen();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Dialog open={open} handler={handleOpen} size="sm">
      <DialogHeader className="text-center justify-center">
        {" "}
        Submit Assignment
      </DialogHeader>
      <DialogBody divider className=" overflow-y-scroll">
        <form onSubmit={handleSubmit} className="w-full px-5 sm:px-10 mt-5">
          <div className="flex flex-wrap -mx-3 mb-6">
            {/* Upload Assignment */}
            <div className="w-full px-3 mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="upload"
              >
                Upload Assignment
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="upload"
                type="file"
                onChange={(e) => {
                  setUpload(e.target.files[0]);
                }}
              />
            </div>
            <input
              type="submit"
              className="p-2 bg-[var(--theme-color)] rounded-lg text-white hover:bg-[var(--secondary-color)] cursor-pointer transition-all"
            />
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
  );
};

export default ModalUploadAssignment;

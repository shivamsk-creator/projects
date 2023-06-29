import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import baseurl from "../../../../Config";

const ModalEditDoc = ({ open, handleOpen, getDocsData, item }) => {
  const [name, setName] = useState("");
  const [doc, setDoc] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    setName(item.name);
    setDoc(item.doc);
    setCourse(item.course);
  }, [getDocsData]);

  // Post Api For Posting Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("doc", doc);
    formData.append("course", course);

    // Empty the value of fields
    setName("");
    setDoc("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/docxconent/" + item._id, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        toast.success("Doc Updated Successfully");
        getDocsData();
        handleOpen();
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
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[40%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Add Doc
        </DialogHeader>
        <DialogBody divider className="">
          <form onSubmit={handleSubmit} className="w-full px-5 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
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
                  placeholder="Lec -34 How was your Day"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="doc"
                >
                  doc
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="doc"
                  type="file"
                  onChange={(e) => {
                    setDoc(e.target.files[0]);
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
    </>
  );
};

export default ModalEditDoc;

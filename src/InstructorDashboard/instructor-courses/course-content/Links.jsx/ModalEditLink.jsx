import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import baseurl from "../../../../Config";

const ModalEditLink = ({ open, handleOpen, getLinksData, item }) => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    setName(item.name);
    setLink(item.link);
    setCourse(item.course);
  }, [getLinksData]);

  // Post Api For Posting Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      link,
      course,
    };

    // Empty the value of fields
    setName("");
    setLink("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/linkcontent/" + item._id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        toast.success("link Updated Successfully");
        getLinksData();
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
          Edit Link
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
                  htmlFor="link"
                >
                  Link
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="link"
                  rows={4}
                  type="text"
                  onChange={(e) => {
                    setLink(e.target.value);
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

export default ModalEditLink;

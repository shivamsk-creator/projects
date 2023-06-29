import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import baseurl from "../../../Config";
import { toast } from "react-toastify";

const ModalAddCategory = ({ open, handleOpen, getCategoryList }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const data = {
    name,
    desc,
  };

  console.log(data);

  const onSubmitClick = () => {
    // Empty the value of fields
    setName("");
    setDesc("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/category", {
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
          toast.success("Category Added Successfully");
          getCategoryList();
          handleOpen();
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
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[40%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Add Category
        </DialogHeader>
        <DialogBody divider className="">
          <form className="w-full px-5 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="first-name"
                >
                  Category Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="fullName"
                  type="text"
                  placeholder="e.g., Graphic Designing"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="desc"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="desc"
                  placeholder="Write Category Description"
                  value={desc}
                  rows="5"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              {/* <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="thumbnail"
                >
                  Category Thumbnail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="thumbnail"
                  type="file"
                  placeholder="e.g., Graphic Designing"
                  value={thumbnail}
                  onChange={(e) => {
                    setThumbnail(e.target.files[0]);
                  }}
                />
              </div> */}
              {/* <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="subCategory"
                >
                  Subcategory
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="subCategory"
                  type="text"
                  placeholder="type subcategory"
                  value={subcategory}
                  onChange={(e) => {
                    setSubcategory(e.target.value);
                  }}
                />
              </div> */}
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
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalAddCategory;

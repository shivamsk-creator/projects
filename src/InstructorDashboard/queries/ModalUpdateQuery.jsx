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

const ModalUpdateQuery = ({ open, handleOpen, item, getQueriesList }) => {
  const [status, setStatus] = useState("");
  const [response, setResponse] = useState("");

  const date = item.date;
  const regno = item.regno;
  const name = item.name;
  const query = item.query;

  const onSubmitClick = () => {
    const data = { regno, query, date, status, response, name };

    // Empty the fields
    // setQuery("");

    // Post Api For Updating Query
    fetch(baseurl + "/api/queries/" + item._id, {
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
      .then((result) => {
        toast.success("Query Resolved");
        getQueriesList();
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
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[20%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          Resolve Query
        </DialogHeader>
        <DialogBody divider className="">
          <form className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* status */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="status"
                >
                  Select Status
                </label>
                <select
                  label="Select Course"
                  className=" w-40 px-2 py-5 border focus-visible:outline-none"
                  value={status}
                  onChange={(e) => {
                    setStatus(e.target.value);
                  }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Solved">Resolved</option>
                </select>
              </div>
              {/* Response */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="response"
                >
                  Response
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  rows={7}
                  id="response"
                  type="text"
                  placeholder="Solution"
                  value={response}
                  onChange={(e) => {
                    setResponse(e.target.value);
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

export default ModalUpdateQuery;

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
} from "@material-tailwind/react";

const ModalRequestBook = ({ open, handleOpen }) => {
  const [name, setName] = useState("Select");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [status, setStatus] = useState("Pending");
  console.log(name);
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          New Book Request
        </DialogHeader>
        <DialogBody divider className=" px-5">
          <form>
            <div className="flex flex-wrap mt-5 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="book-namefirst-name"
                >
                  Select Book
                </label>
                <select
                  label="Book Name"
                  className="p-2 border focus-visible:outline-none"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                >
                  <option value="Coal and Mine Chapter 2">
                    Coal and Mine Chapter 2
                  </option>
                  <option value="A Seed Tells farmer Story">
                    A Seed Tells farmer Story
                  </option>
                  <option value="Boxes And Sketches">Boxes And Sketches</option>
                  <option value="Bado ka Bachapan">Bado ka Bachapan</option>
                  <option value="Experiments with Water">
                    Experiments with Water
                  </option>
                </select>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="from"
                  type="date"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="to"
                  type="date"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
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
          <Button variant="gradient" color="blue">
            <span>Submit</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default ModalRequestBook;

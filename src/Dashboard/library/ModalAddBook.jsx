import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import { toast } from "react-toastify";

const ModalAddBook = ({ open, handleOpen, getBookList }) => {
  const [rack_no, setRack_no] = useState("");
  const [title, setTitle] = useState("");
  const [book_no, setBook_no] = useState("");
  const [publisher, setPublisher] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn_no, setIsbn_no] = useState("");
  const [qty, setQty] = useState("");
  const [available, setAvailable] = useState("");
  const [date, setDate] = useState("");
  const [des, setDes] = useState("");

  const data = {
    rack_no,
    title,
    book_no,
    publisher,
    author,
    isbn_no,
    qty,
    available,
    date,
    des,
  };

  console.log(data);

  const onSubmitClick = () => {
    // Empty the value of fields
    setTitle("");
    setIsbn_no("");
    setRack_no("");
    setBook_no("");
    setPublisher("");
    setAvailable("");
    setDate("");
    setAuthor("");
    setDes("");
    setQty("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/library", {
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
        console.log(result);
        if (result.status === true && result.code === 200) {
          handleOpen();
          toast.success("Book Added Successfully");
        } else {
          handleOpen();
          // alert(result.message);
          toast.error(`${result.message}`);
          getBookList();
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
        className="min-w-[80%] md:min-w-[60%] lg:min-w-[50%]"
      >
        <DialogHeader className="text-center justify-center">
          {" "}
          <div>Add Book</div>
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form className="w-full px-5 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-title"
                >
                  First title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-title"
                  type="text"
                  placeholder="Jane"
                />
                <p className="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div> */}
              {/* Title */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="title"
                  type="text"
                  placeholder="Think And Grow Rich"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              {/* Book No */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="book_no"
                >
                  Book No
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="book_no"
                  type="number"
                  placeholder="68754"
                  value={book_no}
                  onChange={(e) => {
                    setBook_no(e.target.value);
                  }}
                />
              </div>
              {/* ISBN NO */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="isbn_no"
                >
                  ISBN NO
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="isbn_no"
                  type="number"
                  placeholder="4321fdsa"
                  value={isbn_no}
                  onChange={(e) => {
                    setIsbn_no(e.target.value);
                  }}
                />
              </div>
              {/* Publisher */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="publisher"
                >
                  Publisher
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="publisher"
                  type="text"
                  placeholder="ABC Publications Pvt. Ltd."
                  value={publisher}
                  onChange={(e) => {
                    setPublisher(e.target.value);
                  }}
                />
              </div>
              {/* Description */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="des"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  rows={5}
                  id="des"
                  type="text"
                  placeholder="This book is....."
                  value={des}
                  onChange={(e) => {
                    setDes(e.target.value);
                  }}
                />
              </div>
              {/* Author */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="author"
                >
                  Author
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="Author"
                  type="text"
                  placeholder="Hari Om Prakash"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </div>
              {/* Rack No */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="rack_no"
                >
                  Rack No.
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="rack_no"
                  type="number"
                  placeholder="7643858"
                  value={rack_no}
                  onChange={(e) => {
                    setRack_no(e.target.value);
                  }}
                />
              </div>
              {/* qty */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="qty"
                >
                  Quantity
                </label>
                <input
                  className="scroll-smooth appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="qty"
                  type="number"
                  placeholder="23"
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                />
              </div>
              {/* Available */}
              <div className="w-full md:w-1/2 px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="available"
                >
                  Available
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="available"
                  type="number"
                  placeholder="453"
                  value={available}
                  onChange={(e) => {
                    setAvailable(e.target.value);
                  }}
                />
              </div>
              {/* Date */}
              <div className="w-full md:w-1/2 px-3 mb-3">
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

export default ModalAddBook;

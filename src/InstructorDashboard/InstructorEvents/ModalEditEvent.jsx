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

const ModalEditEvent = ({ item, getEventsList, open, handleOpen }) => {
  const [event, setEvent] = useState("");
  const [desc, setDesc] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    setEvent(item.event);
    setDesc(item.desc);
    setFrom(item.from);
    setTo(item.to);
    setImg(item.img);
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("event", event);
    formData.append("desc", desc);
    formData.append("from", from);
    formData.append("to", to);
    formData.append("img", img);

    // Empty the fields
    setEvent("");
    setDesc("");
    setFrom("");
    setTo("");
    setImg("");

    // Post Api For Posting Data
    fetch(baseurl + "/api/event/" + item._id, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.info("Event Added Successfully");
        handleOpen();
        getEventsList();
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
          Update Event
        </DialogHeader>
        <DialogBody divider className="h-[25rem] overflow-y-scroll">
          <form onSubmit={handleSubmit} className="w-full px-5 sm:px-10 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              {/* event */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="event"
                >
                  Event
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="event"
                  type="text"
                  placeholder="Holi"
                  value={event}
                  onChange={(e) => {
                    setEvent(e.target.value);
                  }}
                />
              </div>
              {/* desc */}
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
                  type="number"
                  rows={5}
                  placeholder="Holiday for 2 Days"
                  value={desc}
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                />
              </div>
              {/* from */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="from"
                >
                  From
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="from"
                  type="date"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
              </div>
              {/* to */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="to"
                >
                  To
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="to"
                  type="date"
                  value={to}
                  onChange={(e) => {
                    setTo(e.target.value);
                  }}
                />
              </div>
              {/* Image */}
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="image"
                  type="file"
                  onChange={(e) => {
                    setImg(e.target.files[0]);
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

export default ModalEditEvent;

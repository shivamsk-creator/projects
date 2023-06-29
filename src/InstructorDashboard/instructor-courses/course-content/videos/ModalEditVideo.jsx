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

const ModalEditVideo = ({ open, handleOpen, getVideosData, item }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [duration, setDuration] = useState("");
  const [video, setVideo] = useState("");
  const [course, setCourse] = useState("");

  useEffect(() => {
    setName(item.name);
    setDes(item.name);
    setDuration(item.name);
    setVideo(item.name);
    setCourse(item.name);
  }, [getVideosData]);

  // Post Api For Posting Data
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("video", video);
    formData.append("course", course);
    formData.append("des", des);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    // Empty the value of fields
    setName("");
    setDes("");
    setDuration("");
    setVideo("");

    // Post Api For Updating Data
    fetch(baseurl + "/api/videocontent/" + item._id, {
      method: "PUT",
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        toast.success("Video Updated Successfully");
        getVideosData();
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
          Edit Video
        </DialogHeader>
        <DialogBody divider className="">
          <form onSubmit={handleSubmit} className="w-full px-5 mt-5">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="name"
                >
                  Video Name
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
                  htmlFor="des"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="des"
                  placeholder="Write Video Description"
                  value={des}
                  rows="5"
                  onChange={(e) => {
                    setDes(e.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="duration"
                >
                  Duration
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="duration"
                  type="text"
                  placeholder="39:26"
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                />
              </div>
              <div className="w-full px-3 mb-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="video"
                >
                  Video
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="video"
                  type="file"
                  onChange={(e) => {
                    setVideo(e.target.files[0]);
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

export default ModalEditVideo;

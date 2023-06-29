import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import ModalEditVideo from "./ModalEditVideo";
import baseurl from "../../../../Config";
import { toast } from "react-toastify";

const SingleVideo = ({ item, getVideosData }) => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + "/api/videocontent/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.info("Deleted Successfully");
          getVideosData();
        });
    }
  }
  return (
    <div className=" border shadow-lg w-64 m-3">
      <video controls className="w-full h-36">
        <source
          src={`${baseurl}/api/videocontent/${item.video}`}
          type="video/mp4"
        />
      </video>
      <div className="py-2 px-2">
        <div>Name : {item.name}</div>
        <div>{item.desc}</div>
        <div>Duration : {item.duration}</div>
        <div className=" top-3 right-3 space-x-3 flex justify-center my-3">
          <Button size="sm" onClick={handleOpen2}>
            Edit
          </Button>
          <Button
            size="sm"
            onClick={() => {
              deleteData(item._id);
            }}
          >
            Delete
          </Button>
        </div>
      </div>
      <ModalEditVideo
        open={open2}
        handleOpen={handleOpen2}
        getVideosData={getVideosData}
        item={item}
      />
    </div>
  );
};

export default SingleVideo;

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import baseurl from "../../../../Config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModalEditLink from "./ModalEditLink";

const SingleLink = ({ item, getLinksData }) => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + "/api/linkcontent/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.info("Deleted Successfully");
          getLinksData();
        });
    }
  }
  return (
    <div className=" border shadow-lg w-64 m-3">
      <div className="py-2 px-2">
        <div>Name : {item.name}</div>
        <div className="break-words">
          Link :{" "}
          <Link to={item.ink} className="hover:text-blue-800">
            {item.link}
          </Link>
        </div>
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
      <ModalEditLink
        open={open2}
        handleOpen={handleOpen2}
        getLinksData={getLinksData}
        item={item}
      />
    </div>
  );
};

export default SingleLink;

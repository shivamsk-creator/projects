import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import baseurl from "../../../../Config";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ModalEditDoc from "./ModalEditDoc";

const SingleDoc = ({ item, getDocsData }) => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + "/api/docxconent/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.info("Deleted Successfully");
          getDocsData();
        });
    }
  }
  return (
    <div className=" border shadow-lg w-64 m-3">
      <div className="py-2 px-2">
        <div className=" my-2">Name : {item.name}</div>
        <div className="flex items-center my-2">
          Doc :{" "}
          <Link to={`${baseurl}/api/docxconent/${item.doc}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
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
      <ModalEditDoc
        open={open2}
        handleOpen={handleOpen2}
        getDocsData={getDocsData}
        item={item}
      />
    </div>
  );
};

export default SingleDoc;

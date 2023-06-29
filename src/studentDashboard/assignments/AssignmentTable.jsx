import React, { useState } from "react";
import baseurl from "../../Config";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import ModalUploadAssignment from "./ModalUploadAssignment";

const AssignmentTable = ({ item, studentData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <tr>
        <td className="px-3 py-5 text-sm">{item.title}</td>
        <td className="px-3 py-5 hidden md:table-cell text-sm max-w-xs">
          {item.instructions}
        </td>
        <td className="px-3 py-5 hidden lg:table-cell text-sm">
          {item.due_date}
        </td>
        <td className="px-3 py-5 hidden lg:table-cell text-sm max-w-xs">
          <Link to={`${baseurl}/assignmentpic/${item.upload}`}>
            {item.upload}
          </Link>
        </td>
        <td className="px-3 py-5 text-sm">
          <Button onClick={handleOpen} size="sm" className="h-fit my-3">
            Upload
          </Button>
        </td>
      </tr>
      <ModalUploadAssignment
        studentData={studentData}
        item={item}
        open={open}
        handleOpen={handleOpen}
      />
    </>
  );
};

export default AssignmentTable;

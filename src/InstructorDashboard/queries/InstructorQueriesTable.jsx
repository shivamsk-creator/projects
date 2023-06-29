import React, { useState } from "react";
import ModalUpdateQuery from "./ModalUpdateQuery";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import { toast } from "react-toastify";
import baseurl from "../../Config";

const InstructorQueriesTable = ({ item, index, getQueriesList }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + `/api/queries/` + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.success("Deleted Successfully");
          getQueriesList();
        });
    }
  }
  return (
    <>
      <tr key={item._id}>
        <td className="px-0 py-5 text-sm">{index + 1}.</td>
        <td className="px-3 py-5 hidden lg:table-cell ">{item.name}</td>
        <td className="px-3 py-5 text-sm max-w-xs">{item.query}</td>
        <td className="px-3 py-5 hidden lg:table-cell ">{item.date}</td>
        <td className="px-3 py-5  text-sm">
          {item.status == "pending" ? (
            <div className="text-red-500 py-1">Pending</div>
          ) : (
            <div className="text-teal-500 py-1">Solved</div>
          )}

          <p className="max-w-xs text-gray-700">{item.response}</p>
        </td>
        <td className="px-3 py-5 ">
          <Menu>
            <MenuHandler>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <div onClick={handleOpen} className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="Blue"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Resolve
                </div>
              </MenuItem>
              <MenuItem>
                <div onClick={() => deleteData(item._id)} className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  Delete
                </div>
              </MenuItem>
            </MenuList>
          </Menu>

          <ModalUpdateQuery
            open={open}
            handleOpen={handleOpen}
            item={item}
            getQueriesList={getQueriesList}
          />
        </td>
      </tr>
    </>
  );
};

export default InstructorQueriesTable;

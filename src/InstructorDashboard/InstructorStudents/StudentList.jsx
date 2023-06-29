import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import ModalAssignStudent from "./ModalAssignStudent";
import ModalRevokeStudent from "./ModalRevokeStudent";

const StudentList = ({ item }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);
  return (
    <>
      <tr class="bg-white border-b">
        <td class=" py-4">
          <Checkbox />
        </td>
        <th scope="row" class="px-6 py-4 font-semibold text-black flex">
          <div className="bg-[#FF854F] w-fit h-fit p-3  mr-2 rounded-full text-white text-center">
            <span>G K</span>
          </div>
          <div>
            <div>{item.name}</div>
            <div className="font-light my-1 text-gray-500">{item.email}</div>
          </div>
        </th>
        <td class="px-6 py-4 hidden sm:table-cell">{item.fname}</td>
        <td class="px-6 py-4 hidden sm:table-cell">{item.courses}</td>
        <td class="px-6 py-4 hidden md:table-cell">{item.contact}</td>
        <td class="px-3 py-4 hidden lg:table-cell">{item.gender}</td>
        <td class="px-3 py-4 hidden lg:table-cell">
          <div>{item.dob}</div>
        </td>
        <td class="px-6 py-4 hidden lg:table-cell">{item.admdate}</td>
        <td class="px-1 py-4">
          <div>
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
                      stroke="currentColor"
                      className="w-5 h-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                    Assign Course
                  </div>
                </MenuItem>
                <MenuItem>
                  <div onClick={handleOpen2} className="flex ">
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
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                    Revoke Course
                  </div>
                </MenuItem>
              </MenuList>
            </Menu>

            <ModalAssignStudent open={open} handleOpen={handleOpen} />
            <ModalRevokeStudent open={open2} handleOpen={handleOpen2} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default StudentList;

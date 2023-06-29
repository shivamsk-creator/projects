import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";
import baseurl from "../../Config";
import ModalUpdateIncome from "./ModalUpdateIncome";
import { toast } from "react-toastify";

const IncomeTable = ({ item, getIncomeList }) => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + `/api/income/` + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.success("Deleted Successfully");
          getIncomeList();
        });
    }
  }

  return (
    <tr class="bg-white border-b" key={item._id}>
      <td class=" py-4">
        <Checkbox />
      </td>
      <th scope="row" class="px-6 py-4 font-semibold text-black">
        <div>{item.name}</div>
      </th>
      <td class="px-6 py-4 hidden  md:table-cell">{item.income_head}</td>
      <td class="px-6 py-4 max-w-xs hidden lg:table-cell">{item.desc}</td>
      <td class="px-6 py-4 hidden sm:table-cell">{item.invoice_number}</td>
      <td class="px-6 py-4 hidden md:table-cell">{item.date}</td>
      <td class="px-6 py-4 hidden lg:table-cell max-w-xs break-words">
        {item.attach}
      </td>
      <td class="px-6 py-4">Rs. {item.amount}</td>
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
                className="w-6 h-6 cursor-pointer"
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
                <div onClick={handleOpen2} className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  Edit
                </div>
              </MenuItem>
              <MenuItem>
                <div className="flex " onClick={() => deleteData(item._id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  Delete
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <ModalUpdateIncome
            open={open2}
            handleOpen={handleOpen2}
            item={item}
            getIncomeList={getIncomeList}
          />
        </div>
      </td>
    </tr>
  );
};

export default IncomeTable;

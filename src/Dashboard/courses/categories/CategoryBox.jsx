import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import baseurl from "../../../Config";
import ModalEditCategory from "./ModalEditCategory";
import { toast } from "react-toastify";

const CategoryBox = ({ item, getCategoryList }) => {
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(!open2);

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + "/api/category/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.info("Deleted Successfully");
          getCategoryList();
        });
    }
  }
  return (
    <div className=" w-64 shadow-lg p-2 m-2 rounded-lg">
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="py-2 px-3 bg-[#9d40ff] rounded-lg w-fit h-fit text-white">
            {item.name.substr(0, 1).toUpperCase()}
          </div>
          <div>
            <h6 className="font-bold text-xl">{item.name.toUpperCase()}</h6>
            {/* <span className="text-[var(--dash-text-color)] text-sm">
      3 SubCategories
    </span> */}
          </div>
        </div>
        {/* Icon */}
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
            <MenuList className="p-0">
              <MenuItem>
                <div className="flex " onClick={handleOpen2}>
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
                  Edit Category
                </div>
              </MenuItem>

              <MenuItem>
                <div
                  className="flex "
                  onClick={() => {
                    deleteData(item._id);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 mx-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Delete Category
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <ModalEditCategory
            item={item}
            open={open2}
            handleOpen={handleOpen2}
            getCategoryList={getCategoryList}
          />
        </div>
      </div>
      <p className="font-extralight text-sm mb-3">{item.desc}</p>
    </div>
  );
};

export default CategoryBox;

import React, { useEffect, Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import baseurl from "../../Config";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Checkbox,
} from "@material-tailwind/react";

import StudentList from "./StudentList";

const InstructorStudents = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getStudentList();
  }, [page]);

  const getStudentList = () => {
    fetch(baseurl + "/api/students ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setProduct(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //handle Next
  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };
  //handlePrevious
  const handlePrevious = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };
  //console.log(pageCount)

  useEffect(() => {
    const pagedatacount = Math.ceil(product.length / 5);
    setPageCount(pagedatacount);

    if (page) {
      const LIMIT = 5;
      const skip = LIMIT * page;
      const dataskip = product.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip);
    }
  }, [product]);

  return (
    <>
      <div className="p-5 ml-auto shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa] mt-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
            Students
          </h2>
          {/* Students */}
          <div className="flex items-center flex-col sm:flex-row">
            <div className=" w-48 mx-2">
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  type="textarea"
                  className="relative m-0 block w-[1%] min-w-0 pl-2 pr-8 py-2  flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-[var(--theme-color)] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                  placeholder="Search by name"
                  value={search}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                />
                <div
                  className=" absolute bottom-1 right-1 input-group-text flex items-center whitespace-nowrap rounded px-1 py-1.5 text-center text-base font-normal text-neutral-700  cursor-pointer"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* <Button onClick={handleOpen} className="h-fit">
              + Add
            </Button> */}
          </div>
        </div>

        {/* Student Table */}
        <div className="my-10">
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-md text-[var(--secondary-color)] uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className=" py-3">
                    <Checkbox />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Father Name
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Courses
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Contact
                  </th>
                  <th scope="col" className="px-3 py-3 hidden lg:table-cell">
                    Gender
                  </th>
                  <th scope="col" className="px-3 py-3 hidden lg:table-cell">
                    DOB
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Admission Date
                  </th>
                  <th scope="col" className="px-1 py-3">
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
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy Data Ends Here */}
                {pageData.map((item) => {
                  if (
                    item.name
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                  ) {
                    return (
                      <>
                        <StudentList item={item} />
                      </>
                    );
                  }
                })}
              </tbody>
            </table>
            <div>
              <nav aria-label="Page navigation example">
                <ul className="pagination flex space-x-5 border w-fit px-2 py-1 mx-5 mt-5">
                  <li className="page-item">
                    <a
                      className="page-link"
                      sty
                      href="#"
                      aria-label="Previous"
                      onClick={handlePrevious}
                      disabled={page === 1}
                    >
                      <span
                        aria-hidden="true"
                        className="border px-2 py-1 shadow-xl rounded-lg"
                      >
                        &laquo;
                      </span>
                      <span className="sr-only">Previous</span>
                    </a>
                  </li>
                  {Array(pageCount)
                    .fill(null)
                    .map((ele, index) => {
                      return (
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            active={page === index + 1 ? true : false}
                            onClick={() => {
                              setPage(index + 1);
                            }}
                          >
                            {index + 1}
                          </a>
                        </li>
                      );
                    })}
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="#"
                      aria-label="Next"
                      onClick={handleNext}
                      disabled={page === pageCount}
                    >
                      <span
                        aria-hidden="true"
                        className="border px-2 py-1 shadow-xl rounded-lg"
                      >
                        &raquo;
                      </span>
                      <span className="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorStudents;

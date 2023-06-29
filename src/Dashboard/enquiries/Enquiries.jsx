import React, { useEffect, useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import baseurl from "../../Config";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Enquiries = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getEnquiryList();
  }, [page]);

  const getEnquiryList = () => {
    fetch(baseurl + "/api/enquiry ", {
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
        console.log(result);
      })
      .catch((err) => {
        let a = 10;
        console.log(err);
      });
  };

  // const getProduct = async () => {
  //   let result = await fetch(baseurl + "/api/students");
  //   result = await result.json();
  //   setProduct(result);
  //   console.log(result);
  // };
  // console.log(product);

  const deleteData = async (id) => {
    //console.warn(id)
    var result = fetch(baseurl + `/api/students/${id}`, {
      method: "DELETE",
    });
    alert("Are You Sure To Delete Data...?");
    result = await result.json();
  };

  // getProduct();

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
    <div>
      <div className="mt-5 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-3 sm:px-5 py-5 ml-auto shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
            Enquiries
          </h2>
          {/* Students */}
          <div className="flex items-center">
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
          </div>
        </div>

        {/* Student Table */}
        <div className="my-10">
          <div className="relative mx-auto overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 overflow-x-scroll ">
              <thead className="text-md text-[var(--secondary-color)] uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className=" py-3">
                    <Checkbox />
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 hidden sm:table-cell">
                    Father Name
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Contact
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Ref By
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Date of Birth
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Expected DOJ
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Counseller
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Course
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Note
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
                {/* Dummy Data Starts here */}
                <tr className="bg-white border-b">
                  <td scope="col" className=" py-3">
                    <Checkbox />
                  </td>
                  <td className="px-6 py-4">Shivam</td>
                  <td className="px-6 py-4  hidden sm:table-cell">
                    ssk7860345351@gmail.com
                  </td>
                  <td className="px-6 py-4  hidden sm:table-cell">Mahesh</td>
                  <td className="px-6 py-4 hidden md:table-cell">7860345351</td>
                  <td className="px-6 py-4 hidden md:table-cell">
                    Lorem ipsum dolor sit amet
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">Sonu</td>
                  <td className="px-6 py-4 hidden lg:table-cell">06/08/2023</td>
                  <td className="px-6 py-4 hidden lg:table-cell">Male</td>
                  <td className="px-6 py-4 hidden lg:table-cell">25/05/2023</td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    Er. Gupta Sir
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">ADCA</td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    need help in course
                  </td>
                  <td className="px-1 py-4">
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
                          <Link to="/admin/editEnquiry" className="flex ">
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
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <div className="flex " onClick={deleteData}>
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
                  </td>
                </tr>
                {/* <tr className="bg-white border-b">
                  <td className="px-6 py-4">Shivam</td>
                  <td className="px-6 py-4">ssk7860345351@gmail.com</td>
                  <td className="px-6 py-4">Mahesh</td>
                  <td className="px-6 py-4">7860345351</td>
                  <td className="px-6 py-4">Lorem ipsum dolor sit amet</td>
                  <td className="px-6 py-4">Sonu</td>
                  <td className="px-6 py-4">06/08/2023</td>
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">25/05/2023</td>
                  <td className="px-6 py-4">Er. Gupta Sir</td>
                  <td className="px-6 py-4">ADCA</td>
                  <td className="px-6 py-4">need help in course</td>
                  <td className="px-1 py-4">
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
                          <Link to="/admin/editEnquiry" className="flex ">
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
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <div className="flex " onClick={deleteData}>
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
                  </td>
                </tr> */}
                {/* <tr className="bg-white border-b">
                  <td className="px-6 py-4">Shivam</td>
                  <td className="px-6 py-4">ssk7860345351@gmail.com</td>
                  <td className="px-6 py-4">Mahesh</td>
                  <td className="px-6 py-4">7860345351</td>
                  <td className="px-6 py-4">Lorem ipsum dolor sit amet</td>
                  <td className="px-6 py-4">Sonu</td>
                  <td className="px-6 py-4">06/08/2023</td>
                  <td className="px-6 py-4">Male</td>
                  <td className="px-6 py-4">25/05/2023</td>
                  <td className="px-6 py-4">Er. Gupta Sir</td>
                  <td className="px-6 py-4">ADCA</td>
                  <td className="px-6 py-4">need help in course</td>
                  <td className="px-1 py-4">
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
                          <Link to="/admin/editEnquiry" className="flex ">
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
                          </Link>
                        </MenuItem>
                        <MenuItem>
                          <div className="flex " onClick={deleteData}>
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
                  </td>
                </tr> */}

                {/* Dummy Data Ends Here */}
                {pageData.map((item) => {
                  if (
                    item.name
                      .toLowerCase()
                      .includes(search.trim().toLowerCase())
                  ) {
                    return (
                      <tr className="bg-white border-b" key={item._id}>
                        <td className=" py-4">
                          <Checkbox />
                        </td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-semibold text-black"
                        >
                          <div>{item.name}</div>
                          <div className="font-light my-1 text-gray-500">
                            {item.email}
                          </div>
                        </th>
                        <td className="px-6 py-4">{item.fname}</td>
                        <td className="px-6 py-4">{item.address}</td>
                        <td className="px-6 py-4">{item.contact}</td>
                        <td className="px-6 py-4">{item.gender}</td>
                        <td className="px-6 py-4">{item.dob}</td>
                        <td className="px-6 py-4">{item.admdate}</td>
                      </tr>
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
    </div>
  );
};

export default Enquiries;

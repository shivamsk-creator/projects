import React, { useEffect, Fragment, useState } from "react";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import baseurl from "../../Config";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";

const AdminEnrollment = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");
  const [studentsData, setStudentsData] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [loader, setLoader] = useState(true);

  console.log(name, title);

  useEffect(() => {
    getstudentsList();
    getEnrollData();
    getAcademicList();
  }, [page]);

  const date = new Date();
  const create_at =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  const getstudentsList = () => {
    fetch(baseurl + "/api/students", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudentsData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getEnrollData = () => {
    fetch(baseurl + "/api/course", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setCourseData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAcademicList = () => {
    fetch(baseurl + "/api/enroll", {
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
        setLoader(false);
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

  const onAssignClick = () => {
    const data = { student, course, create_at };

    // Post Api For Assigning Data
    fetch(baseurl + "/api/enroll", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        toast.success("Assigned Successfully");
        getEnrollData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudentName = (id) => {
    console.log("id is " + id, "data = " + studentsData);
    let obj = studentsData.filter((student) => student._id == id)[0].name;
    // setName(obj);
    // setName(studentsData.filter((student) => student._id == id)[0].name);
    return obj;
  };

  // console.log(getStudentName("647c511c1939ba005e5f3529"));
  // const getCourseName = (id) => {
  //   setTitle(courseData.filter((course) => course._id == id)[0].title);
  //   return title;
  // };

  function deleteData(id) {
    if (window.confirm("Are you sure You want to delete ?")) {
      fetch(baseurl + "/api/enroll/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json()) // or res.json()
        .then((res) => {
          toast.info("Deleted Successfully");
          getEnrollData();
        });
    }
  }
  return (
    <div>
      <div className="mt-10 mx-auto  p-5 shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
            Student Enrollment
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
        {/* <ModalAddInstructor
          open={open}
          handleOpen={handleOpen}
          getInstructorList={getInstructorList}
        /> */}

        {/* Enroll Students */}
        <div className="flex flex-wrap items-center mt-5 mb-6">
          {/* Select Student */}
          <div className="w-fit mx-2 px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="student"
            >
              Select Student
            </label>
            <select
              label="Select Student"
              className="p-2 border focus-visible:outline-none"
              value={student}
              onChange={(e) => {
                setStudent(e.target.value);
              }}
            >
              <option value="">Select Student</option>
              {studentsData.map((item) => {
                return <option value={item._id}>{item.name}</option>;
              })}
            </select>
          </div>
          {/* Select Course */}
          <div className="w-fit mx-2 px-3 mb-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="course"
            >
              Select Course
            </label>
            <select
              label="Select Course"
              className="p-2 border focus-visible:outline-none"
              value={course}
              onChange={(e) => {
                setCourse(e.target.value);
              }}
            >
              <option value="">Select Course</option>
              {courseData.map((item) => {
                return <option value={item._id}>{item.title}</option>;
              })}
            </select>
          </div>
          <Button
            onClick={onAssignClick}
            variant="gradient"
            color="blue"
            className="h-fit mx-4"
          >
            <span>Assign</span>
          </Button>
        </div>

        {/* Student Table */}
        <div className="my-10">
          <div className="relative overflow-x-auto ">
            {loader ? (
              <div className="w-full h-[90vh] flex justify-center items-center">
                <Loader />
              </div>
            ) : (
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-md text-[var(--secondary-color)] uppercase bg-gray-50 border-b">
                  <tr>
                    <th scope="col" className=" py-3">
                      <Checkbox />
                    </th>
                    <th scope="col" className="px-6 py-3 hidden md:table-cell">
                      Student ID
                    </th>
                    {/* <th scope="col" className="px-6 py-3">
                    Student Name
                  </th> */}
                    <th scope="col" className="px-6 py-3 hidden md:table-cell">
                      Course ID
                    </th>
                    {/* <th scope="col" className="px-6 py-3 ">
                    Course Name
                  </th> */}
                    <th class="px-1 py-4">
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
                              <Link
                                to="/admin/editInstructor"
                                className="flex "
                              >
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
                              <div className="flex">
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
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.map((item) => {
                    if (
                      item.student
                        .toLowerCase()
                        .includes(search.trim().toLowerCase())
                    ) {
                      return (
                        <tr>
                          <td className=" py-3">
                            <Checkbox />
                          </td>
                          <td className="px-6 py-3 hidden md:table-cell">
                            {item.student}
                          </td>
                          {/* <td className="px-6 py-3">
                          {studentsData
                            ? () => getStudentName(item.student)
                            : ""}
                        </td> */}
                          <td className="px-6 py-3 hidden md:table-cell">
                            {item.course}
                          </td>
                          {/* <td className="px-6 py-3 ">
                          {item.course ? () => getCourseName(item.course) : ""}
                        </td> */}
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
                                    <div
                                      onClick={() => {
                                        deleteData(item._id);
                                      }}
                                      className="flex"
                                    >
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
                            </div>
                          </td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            )}

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

export default AdminEnrollment;

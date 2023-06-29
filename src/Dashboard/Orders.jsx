import React, { useEffect, useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import baseurl from "../Config";

const Orders = () => {
  const [product, setProduct] = useState([]);
  const [pageData, setPageData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(baseurl + "/api/orders ", {
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
  }, [page]);

  // const getProduct = async () => {
  //   let result = await fetch(baseurl + "/api/students");
  //   result = await result.json();
  //   setProduct(result);
  //   console.log(result);
  // };
  // console.log(product);

  // const deleteData = async (id) => {
  //   //console.warn(id)
  //   var result = fetch(baseurl + `/api/students/${id}`, {
  //     method: "DELETE",
  //   });
  //   alert("Are You Sure To Delete Data...?");
  //   result = await result.json();
  // };

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
      <div className="p-5 ml-auto shadow-lg  h-[100vh] overflow-y-scroll scrollbar-hide bg-[#f5f6fa]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
            Orders
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
          <div className="relative overflow-x-auto ">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-md text-[var(--secondary-color)] uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className=" py-3">
                    <Checkbox />
                  </th>
                  <th scope="col" className="px-3 py-3 ">
                    Order No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Student
                  </th>
                  <th scope="col" className="px-6 py-3 hidden md:table-cell">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                    Amount
                  </th>
                  <th scope="col" className="px-3 py-3 hidden lg:table-cell">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Dummy Data Starts here */}
                <tr className="bg-white border-b">
                  <td className=" py-3">
                    <Checkbox />
                  </td>
                  <td className="px-3 py-4 text-blue-500">#765656</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-semibold text-black flex items-center"
                  >
                    <div className="text-[#ff3f31] bg-blue-100 w-fit h-fit p-1  mr-2 rounded-full text-center">
                      <span>SS</span>
                    </div>
                    <div>
                      <div>Shivam Singh</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">12/05/2023</td>
                  <td className="px-6 py-4 hidden lg:table-cell">2400</td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <span className="text-[#1ee0ac]">Paid</span>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className=" py-3">
                    <Checkbox />
                  </td>
                  <td className="px-3 py-4 text-blue-500">#765656</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-semibold text-black flex items-center"
                  >
                    <div className="text-[#ff3f31] bg-blue-100 w-fit h-fit p-1  mr-2 rounded-full text-center">
                      <span>SS</span>
                    </div>
                    <div>
                      <div>Shivam Singh</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">12/05/2023</td>
                  <td className="px-6 py-4 hidden lg:table-cell">2400</td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <span className="text-[#1ee0ac]">Paid</span>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className=" py-3">
                    <Checkbox />
                  </td>
                  <td className="px-3 py-4 text-blue-500">#765656</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-semibold text-black flex items-center"
                  >
                    <div className="text-[#ff3f31] bg-blue-100 w-fit h-fit p-1  mr-2 rounded-full text-center">
                      <span>SS</span>
                    </div>
                    <div>
                      <div>Shivam Singh</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">12/05/2023</td>
                  <td className="px-6 py-4 hidden lg:table-cell">2400</td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <span className="text-[#1ee0ac]">Paid</span>
                  </td>
                </tr>
                <tr className="bg-white border-b">
                  <td className=" py-3">
                    <Checkbox />
                  </td>
                  <td className="px-3 py-4 text-blue-500">#765656</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-semibold text-black flex items-center"
                  >
                    <div className="text-[#ff3f31] bg-blue-100 w-fit h-fit p-1  mr-2 rounded-full text-center">
                      <span>SS</span>
                    </div>
                    <div>
                      <div>Shivam Singh</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell">12/05/2023</td>
                  <td className="px-6 py-4 hidden lg:table-cell">2400</td>
                  <td className="px-3 py-4 hidden lg:table-cell">
                    <span className="text-[#1ee0ac]">Paid</span>
                  </td>
                </tr>

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

export default Orders;

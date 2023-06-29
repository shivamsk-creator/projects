import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import baseurl from "../../Config";
import { toast } from "react-toastify";
import Loader from "../../Components/Loader";

const StudentQueries = ({ auth }) => {
  const [query, setQuery] = useState();
  const [studentData, setStudentData] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getStudentsList();
    getQueriesList();
  }, []);

  const getStudentsList = () => {
    fetch(baseurl + "/api/students/ " + auth, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setStudentData(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getQueriesList = () => {
    fetch(baseurl + "/api/queries ", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setQueryData(result);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const date = getCurrentDate();
  const status = "pending";
  const response = "";
  const regno = studentData.regno;
  const name = studentData.name;

  // Get Current Date
  function getCurrentDate() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    let todayDate = now.getDate();
    let currentDate = todayDate + "/" + month + "/" + year;
    return currentDate;
  }

  const onSubmitClick = () => {
    const data = { regno, query, date, status, response, name };

    // Empty the fields
    setQuery("");

    // Post Api For Posting Query
    fetch(baseurl + "/api/queries", {
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
        toast.success("Query Submitted Successfully");

        getQueriesList();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start mt-10 mb-10">
          Queries
        </h2>
        {loader ? (
          <div className="w-full h-[90vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="my-5">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600  text-[var(--secondary-color)]">
                <tr className="uppercase text-start">
                  <th className="px-0 py-3 text-start ">Sr. No.</th>
                  <th className="px-3 py-3 text-start">Query</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Date
                  </th>
                  <th className="px-3 py-3 text-start table-cell">Status</th>
                </tr>
              </thead>
              <tbody className="">
                {queryData.map((item, index) => {
                  return (
                    <tr key={item._id}>
                      <td className="px-0 py-5 text-sm">{index + 1}.</td>
                      <td className="px-3 py-5 text-sm max-w-xs">
                        {item.query}
                      </td>
                      <td className="px-3 py-5 hidden lg:table-cell ">
                        {item.date}
                      </td>
                      <td className="px-3 py-5  text-sm">
                        {item.status == "pending" ? (
                          <div className="text-red-500 py-1">Pending</div>
                        ) : (
                          <div className="text-teal-500 py-1">Solved</div>
                        )}

                        <p className="max-w-xs text-gray-700">
                          {item.response}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* New Query */}
        <form>
          <div className="flex flex-col mx-3 mb-6 mt-10">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="query"
              >
                New Query
              </label>
              <textarea
                rows={10}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="query"
                type="text"
                placeholder="Query...."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            <Button
              onClick={onSubmitClick}
              variant="gradient"
              color="blue"
              className="h-fit w-fit"
            >
              <span>Submit</span>
            </Button>
          </div>
        </form>

        {/*  New Heading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start mt-20 mb-10">
          FeedBack
        </h2>
        {/* Feed Back */}
        <form>
          <div className="flex flex-col mx-3 mb-6 mt-10">
            <div className="w-full md:w-1/2 px-3 mb-3">
              <textarea
                rows={10}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="feedback"
                placeholder="Your Message Here...."
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </div>
            <Button variant="gradient" color="blue" className="h-fit w-fit">
              <span>Submit</span>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default StudentQueries;

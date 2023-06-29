import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import baseurl from "../Config";
import Loader from "../Components/Loader";

const StudentMarks = ({ auth }) => {
  const [marksData, setMarksData] = useState([]);
  const [studentData, setStudentData] = useState("");
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getStudentData();
  }, []);

  const getStudentData = () => {
    fetch(`${baseurl}/api/students/${auth}`, {
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

  let marksEnd = studentData.regno;
  console.log(marksEnd);
  useEffect(() => {
    getMarksData();
  }, [studentData]);

  const getMarksData = () => {
    fetch(`${baseurl}/api/marks/345`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setMarksData(result);
        setLoader(false);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className=" p-2 sm:p-5 md:p-10 ">
        {/* <div className="w-[90%] mb-20 mx-auto shadow-2xl border-t-4 border-t-[var(--theme-color)] p-5">
          <h5 className="font-bold">Your marks</h5>
          <p>Exam 1</p>
          <div className="my-5">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600">
                <tr className="uppercase text-start">
                  <th className="px-3 py-3 text-start ">Subject</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Teacher
                  </th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Mark
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell">
                    Grade
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell ">
                    Comment
                  </th>
                  <th className="px-3 py-3 text-start">View All</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-5 text-sm">
                    Course on Computer Concepts
                  </td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    Jesús Alexander
                  </td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    <span className="bg-[var(--theme-color)] p-1 rounded-lg">
                      69
                    </span>{" "}
                  </td>
                  <td className="px-3 py-5 hidden lg:table-cell text-sm">B</td>
                  <td className="px-3 py-5 hidden lg:table-cell ">Good</td>
                  <td className="px-3 py-5 text-sm">
                    <span className="bg-[var(--secondary-color)] p-0 md:p-2 rounded-lg text-white text-center">
                      View All
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <Button size="sm" className="flex py-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mx-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                />
              </svg>
              Print
            </Button>
          </div>
        </div> */}
        {marksData.map((item) => {
          return (
            <>
              {loader ? (
                <div className="w-full h-[90vh] flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <div className="w-[90%] mb-20 mx-auto shadow-2xl border-t-4 border-t-[var(--theme-color)] p-5">
                  <h5 className="font-bold">Your marks</h5>
                  <p>{item.topic}</p>
                  <div className="my-5">
                    <table className="table-auto w-full">
                      <thead className="border-b border-b-gray-600">
                        <tr className="uppercase text-start">
                          <th className="px-3 py-3 text-start ">Course</th>
                          <th className="px-3 py-3 text-start hidden md:table-cell">
                            Total Marks
                          </th>
                          <th className="px-3 py-3 text-start">
                            Obtained Marks
                          </th>
                          <th className="px-3 py-3 text-start hidden lg:table-cell">
                            Date
                          </th>
                          <th className="px-3 py-3 text-start hidden lg:table-cell ">
                            Comment
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3 py-5 text-sm">{item.course}</td>
                          <td className="px-3 py-5 hidden md:table-cell text-sm">
                            {item.total_marks}
                          </td>
                          <td className="px-3 py-5 text-sm">
                            <span className=" font-semibold text-white bg-[var(--theme-color)] p-2 rounded-lg">
                              {item.obtain_marks}
                            </span>{" "}
                          </td>
                          <td className="px-3 py-5 hidden lg:table-cell text-sm">
                            {item.date}
                          </td>
                          <td className="px-3 py-5 hidden lg:table-cell ">
                            Good
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="flex justify-end">
                  <Button size="sm" className="flex py-3">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 mx-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                      />
                    </svg>
                    Print
                  </Button>
                </div> */}
                </div>
              )}
            </>
          );
        })}
      </section>
    </>
  );
};

export default StudentMarks;

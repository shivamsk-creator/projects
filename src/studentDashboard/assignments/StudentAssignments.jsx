import React, { useEffect, useState } from "react";
import ModalUploadAssignment from "./ModalUploadAssignment";
import { Button } from "@material-tailwind/react";
import baseurl from "../../Config";
import { Link } from "react-router-dom";
import AssignmentTable from "./AssignmentTable";
import Loader from "../../Components/Loader";

const StudentAssignments = ({ auth }) => {
  const [assignmentData, setAssignmentData] = useState([]);
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

  useEffect(() => {
    getAssignmentData();
  }, []);

  const getAssignmentData = () => {
    fetch(`${baseurl}/api/assign`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setAssignmentData(result);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className=" p-5 sm:p-5 lg:p-10 mt-5">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start my-5">
          Assignments
        </h2>
        {loader ? (
          <div className="w-full h-[90vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="my-10">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600">
                <tr className="uppercase text-start">
                  <th className="px-3 py-3 text-start ">Assignment</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Description
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell">
                    Due Date
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell">
                    Document
                  </th>
                  <th className="px-3 py-3 text-start">Upload</th>
                </tr>
              </thead>
              <tbody>
                {assignmentData.map((item) => {
                  return (
                    <>
                      <AssignmentTable studentData={studentData} item={item} />
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
};

export default StudentAssignments;

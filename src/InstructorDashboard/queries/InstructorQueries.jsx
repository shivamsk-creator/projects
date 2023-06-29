import React, { useEffect, useState } from "react";
import baseurl from "../../Config";
import InstructorQueriesTable from "./InstructorQueriesTable";
import Loader from "../../Components/Loader";

const InstructorQueries = () => {
  const [queryData, setQueryData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getQueriesList();
  }, []);

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
        setQueryData(result);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className=" p-5 sm:p-5 lg:p-8 mt-5">
      {/* Heading */}

      <h2 className="text-2xl font-bold text-[var(--secondary-color)] ">
        Student Queries
      </h2>

      <div className="my-5">
        {loader ? (
          <div className="w-full h-[60vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <table className="table-auto w-full">
            <thead className="border-b border-b-gray-600  text-[var(--secondary-color)]">
              <tr className="uppercase text-start">
                <th className="px-0 py-3 text-start ">Sr. No.</th>
                <th className="px-3 py-3 text-start hidden md:table-cell">
                  Student
                </th>
                <th className="px-3 py-3 text-start">Query</th>
                <th className="px-3 py-3 text-start hidden md:table-cell">
                  Date
                </th>
                <th className="px-3 py-3 text-start hidden md:table-cell">
                  Status
                </th>
                <th className="px-0 py-3 text-start table-cell">Update</th>
              </tr>
            </thead>
            <tbody className="">
              {queryData.map((item, index) => {
                return (
                  <InstructorQueriesTable
                    item={item}
                    index={index}
                    getQueriesList={getQueriesList}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
};

export default InstructorQueries;

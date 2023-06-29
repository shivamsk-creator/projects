import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import ModalRequestBook from "./ModalRequestBook";

const StudentLibrary = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <section className=" p-5 sm:p-5 md:p-10 mt-5">
        <div>
          <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start">
            Books Issued
          </h2>

          <div className="my-5">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600  text-[var(--secondary-color)]">
                <tr className="uppercase text-start">
                  <th className="px-3 py-3 text-start ">Book</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    AUTHOR
                  </th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    Issued Date
                  </th>
                  <th className="px-3 py-3 text-start table-cell">
                    Return Due Date
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell ">
                    Return Date
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="px-3 py-5 text-sm">The Lazy Frog</td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    S. K Verma
                  </td>
                  <td className="px-3 py-5 hidden lg:table-cell text-sm">
                    1/05/2023
                  </td>
                  <td className="px-3 py-5 ">20/05/2023</td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    Not returned
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center sm:justify-between items-center">
            <h2 className="text-3xl font-semibold text-[var(--secondary-color)] text-center sm:text-start">
              Book Requests
            </h2>
            <Button onClick={handleOpen} className="h-fit my-3 mx-5">
              New Request
            </Button>
            <ModalRequestBook open={open} handleOpen={handleOpen} />
          </div>

          <div className="my-5">
            <table className="table-auto w-full">
              <thead className="border-b border-b-gray-600 text-[var(--secondary-color)]">
                <tr className="uppercase text-start">
                  <th className="px-3 py-3 text-start ">Book</th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    AUTHOR
                  </th>
                  <th className="px-3 py-3 text-start hidden md:table-cell">
                    From
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell">
                    To
                  </th>
                  <th className="px-3 py-3 text-start hidden lg:table-cell ">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-5 text-sm">The Lazy Frog</td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    S. K Verma
                  </td>
                  <td className="px-3 py-5 hidden lg:table-cell text-sm">
                    1/05/2023
                  </td>
                  <td className="px-3 py-5 hidden lg:table-cell ">
                    20/05/2023
                  </td>
                  <td className="px-3 py-5 hidden md:table-cell text-sm">
                    <span className="text-teal-500">Granted</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default StudentLibrary;
